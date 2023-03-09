import { useState,useEffect } from 'react';
import {  useHistory } from 'react-router-dom';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './stylecampD.css';
import pojo from '../../services/pojo';
import { convertToHTML } from 'draft-convert';

const CampaignDetails2 = (props) => {

  const [imageFile, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const history = useHistory()
  const [story, setStory] = useState();
 
  const campDetail = {
    title,
    story
  }

  // function handleform(){
  //   console.log(editorState);
  // }

  function handleImage(e) {
    e.preventDefault();
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
    pojo.uploadImg(imageFile);
  }

  const onlick = () =>{
    console.log("inside onlick");
    console.log(imageFile)
    pojo.uploadData(imageFile,campDetail);
    history.push("/user/campaign");
 }
   

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setStory(html);
    console.log(editorState.toString())
    console.log(story)
  }, [editorState]);


  return (<div>
    <div className='container-sm' >

      {/* <link rel="stylesheet" href="https://cdnjs.https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <br></br>
      <h3 style={{ align: "left" }}>Campaign Details</h3>
      <br></br>
      <form>
        <div className="row">
          <div className="col-md-3" ></div>
          <div className="col-md-6" >
            <div className='divImg'>
              <label for="image" className='labelImg'>
                Select Image for Campaign <br/><br/>
                <i className="fa fa-2x fa-camera"></i>
                <input id="image" type="file" className='inputImg' onChange={handleImage} />
                <br /><br/>
                <span id="imageName">{imageFile.name}</span>
              </label>
            </div>
          </div>
        </div>
        <br></br>


        <div className="row">
          <div className="col-md-7" ></div>
          <div className="col-md-5" >
            {/* <button type="button" className='btn btn-dark' onClick={pojo.uploadImg(imageFile)}><i className='fa fa-upload' style={{ fontSize: "20px", color: "White" }}></i>&nbsp; Upload</button> */}
          </div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-md-2" ></div>
          <div className="col-md-6" >
            <label htmlFor='title'>Post Title</label>
           <input type="text" id="title" value={title}
                            onChange={(e) => setTitle(e.target.value)} 
                            style={{ width:"650px"}}></input>
          </div>
          <div className="col-md-2" ></div>
        </div>
        <br></br>

        <div className="row">
          <div className="col-md-2" ></div>
          <div className="col-md-6" >
            <label htmlFor='editor'>Post Story</label>
              <Editor
                id ="editor"
                editorState={editorState}
                onEditorStateChange={setEditorState}
                toolbarclassName="toolbarclassName"
                wrapperclassName="wrapperclassName"
                editorclassName="editorclassName"
                wrapperStyle={{ width: 650,border: "1px solid black" }}
              />
          </div>
          <div className="col-md-2" ></div>
        </div>
        <br></br>
        <br></br>
            <div className="row">
                    <div className="col-md-1" ></div>
                    <div className="col-md-2" >
                        <button onClick={()=>props.sendToParent(6)} className='btn btn-primary' style={{ textAlign: "left" }}><i className="fa fa-arrow-left"></i>&nbsp;Back</button>
                    </div>
                    <div className="col-md-2" >
                      
                        <button onClick={()=>onlick()} className='btn btn-primary'>
                            Submit
                        </button>
                    </div>
                </div>
        <br></br>
      </form>
    </div>
    <hr />
  </div>);
}
export default CampaignDetails2;