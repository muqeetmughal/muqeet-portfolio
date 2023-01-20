import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Icon } from "react-icons-kit";
import { powerOff } from "react-icons-kit/fa/powerOff";
import { db, auth, provider } from "../utils/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

import {
  CreateDiv,
  Form,
  GoogleBtn,
  Alert,
  AdminPopup,
  FormContainer,
} from "../styles/pages/LoginStyles";

export default function Login() {
  const [name, setName] = useState("");
  const [framework, setFramework] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [id, setId] = useState("");
  const [filename, setFilename] = useState("Choose File...");
  const [user, setUser] = useState("");
  const [successToggle, setSuccessToggle] = useState(false);
  const [email] = useState(process.env.REACT_APP_EMAIL);
  const [wrongUser, setWrongUser] = useState(false);
  const [toggleDialogue, setToggleDialogue] = useState(true);
  const [title, setTitle] = useState("Login");

  const [numData, setnumData] = useState([]);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user.email);
        // eslint-disable-next-line no-console
        console.log(result);
        if (user !== process.env.REACT_APP_EMAIL) {
          setToggleDialogue(true);
        }
        setWrongUser(true);
        localStorage.setItem("imsamimalikSecurityToken", result.user.uid);
        setTitle("Create");
      })
      .catch((err) => alert(err.message));
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setFilename(e.target.files[0].name);
    }
  };

  useEffect(() => {
    async function fetchID() {
      const dbRef = collection(db, "all");
      const nextItem = query(dbRef, orderBy("id", "desc"), limit(1));

      const nextItemData = await getDocs(nextItem);

      nextItemData.forEach((item) => {
        setnumData(item.data());
      });
      localStorage.getItem("imsamimalikSecurityToken") && setTitle("Create");
    }
    fetchID();
  }, []);

  const handleUpload = (e) => {
    e.preventDefault();

    const storageInstance = getStorage();

    const storageRef = ref(storageInstance, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshpot) => {
        const progress = Math.round(
          (snapshpot.bytesTransferred / snapshpot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      async () => {
        getDownloadURL(storageRef).then(
          async (downUrl) =>
            await addDoc(collection(db, "all"), {
              id: +id,
              title: name,
              imgUrl: downUrl,
              framework,
              link,
              description,
            })
        );
        setTimeout(() => {
          setSuccessToggle(true);
        }, 1);
        setTimeout(() => {
          setSuccessToggle(false);
        }, 1500);
        setImage("");
        setName("");
        setLink("");
        setFramework("");
        setDescription("");
        setId(id);
        setProgress(0);
        setFilename("Choose File...");
      }
    );
  };
  const signMeOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("imsamimalikSecurityToken");
      //localStorage.removeItem("adminPhoto");
      setTitle("Login");
      setUser("");
      setToggleDialogue(false);
    });
  };
  return (
    <>
      <Helmet>
        <title>{`${title} - imsamimalik`}</title>
      </Helmet>
      <CreateDiv>
        {localStorage.getItem("imsamimalikSecurityToken") ===
          process.env.REACT_APP_UID || user === process.env.REACT_APP_EMAIL ? (
          <>
            <AdminPopup onClick={signMeOut}>
              <Icon icon={powerOff}></Icon>
            </AdminPopup>
            <FormContainer>
              <Form className="form" onSubmit={handleUpload}>
                <input
                  onChange={(e) => setId(e.target.value)}
                  value={id}
                  type="number"
                  min="0"
                  max="1000"
                  placeholder={`Enter id ${numData.id + 1}`}
                  required
                />
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter title"
                  required
                />
                <input
                  onChange={(e) => setFramework(e.target.value)}
                  value={framework}
                  type="text"
                  placeholder="Enter framework"
                  required
                />
                <input
                  onChange={(e) => setLink(e.target.value)}
                  value={link}
                  type="text"
                  placeholder="Enter link"
                  required
                />
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  type="text"
                  placeholder="Enter description"
                  required
                />
                <label className="file">
                  <input onChange={handleChange} type="file" required />
                  <span className="file-custom">{filename}</span>
                </label>
                <progress className="progress" value={progress} max="100" />

                {successToggle && <Alert>Item added</Alert>}
                <button
                  disabled={!name || !framework || !id || !link || !image}
                >
                  Submit
                </button>
              </Form>
            </FormContainer>
          </>
        ) : (
          <GoogleBtn onClick={signIn}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google logo"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with Google</b>
            </p>
          </GoogleBtn>
        )}
        {user !== email && wrongUser && toggleDialogue ? (
          <h1
            className="invalidUser"
            style={{ marginTop: "60px", zIndex: "999999999" }}
          >
            You&apos;re not authorized to access this page.
          </h1>
        ) : (
          ""
        )}
      </CreateDiv>
    </>
  );
}
