"use client";
import Image from 'next/image';
import styles from './write.module.css'
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.bubble.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';
import dynamic from 'next/dynamic';
// import ReactQuill from 'react-quill';

const storage = getStorage(app);

const WritePage = () => {
    const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        // [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        // [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        // [{ 'direction': 'rtl' }],                         // text direction

        // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];

    const customModule = {
        toolbar: toolbarOptions,
    }

    const { data, status } = useSession();
    const router = useRouter();

    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [catSlug, setCatSlug] = useState("");


    useEffect(() => {
        if (typeof window !== 'undefined') {
        const upload = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                    });
                }
            );
        };

        file && upload();
    }
    }, [file]);

    if (status === 'loading') return <div>Loading...</div>
    if (status === 'unauthenticated') {
        router.push('/');
    };

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ 
                title, 
                desc: value, 
                img: media, 
                slug: slugify(title), 
                catSlug: catSlug, 
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.status === 200) {
            const data = await res.json();
            // router.push(`/posts/${data.slug}`);
            router.push('/');
        }
    };

    return (
        <div className={styles.container}>
            <input placeholder="Title" className={styles.input} onChange={e => setTitle(e.target.value)} />
            <div className={styles.header}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt='add' width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <input
                            type="file"
                            id='image'
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: 'none' }}
                        />

                        <button className={styles.addButton}>
                            <label htmlFor="image">
                                <Image src="/image.png" alt='add' width={16} height={16} />
                            </label>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt='add' width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt='add' width={16} height={16} />
                        </button>
                    </div>
                )}
                


            </div>

            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                    <option value="javascript">javascript</option>
                    <option value="coding">coding</option>
                    <option value="projects">projects</option>
                    <option value="ai">ai</option>
                    <option value="python">python</option>
                    <option value="study">study</option>
                    <option value="dotnet">dotnet</option>
                </select>


            <div className={styles.editor}>


                {/* text area */}
                <ReactQuill
                    modules={customModule}
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder='Write and select the text to format it...'
                />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>Publish</button>
        </div>
    );
};

export default WritePage;
