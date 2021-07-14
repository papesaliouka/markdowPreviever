import marked from 'marked';
import './preview.styles.css';
const Preview = (
    {text}
)=>{
    return(
        <div className="container">
            <header className='head'>Previewer</header>
            <div className='preview' >
                <div id='preview' dangerouslySetInnerHTML={{__html: marked(text)}} />
            </div>
        </div>
    );
}

export default Preview