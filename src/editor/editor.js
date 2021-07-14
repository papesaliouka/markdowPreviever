const Editor = ({handleChange, text})=>{
    return(
        <div  className='editor'>
            <header>Editor</header>
            <textarea id='editor' value={text} onChange={handleChange} cols="30" rows="10"></textarea>
        </div>
    );
}

export default Editor;