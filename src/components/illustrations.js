import React, {useState, useEffect} from 'react'
import '../assets/css/main.scss'
import Daniel from '../assets/img/Illustrations/Daniel.png'
import Jesper from '../assets/img/Illustrations/Jesper.png'
import Daryl from '../assets/img/Illustrations/Daryl.png'
import Tommy from '../assets/img/Illustrations/Tommy.png'
import { saveAs } from 'file-saver'

const Illustrations = () => {
    const [downloadImg, setDownloadImg] = useState(null)

    useEffect(() => {
        if(downloadImg){
            console.log(downloadImg)
            saveAs(downloadImg.img, downloadImg.fileName ) 
        }
    }, [downloadImg]);

    return (
        <div className='main-container'>
            <h1 id='Illustrationer' className='header-title'>Illustrationer</h1>
            <div className='illustrations-container'>
                <div className='card' key='daniel'>
                    <img src={Daniel} alt=" Daniel Ljung" />
                    <button onClick={() => setDownloadImg({img: Daniel, fileName: 'DanielLjung'})} className='download-btn'> Ladda Ner</button>
                </div>
                <div className='card' key='Jesper'>
                    <img src={Jesper} alt=" Jesper Svensson" />
                    <button onClick={() => setDownloadImg({img: Jesper, fileName: 'JesperSvensson'})} className='download-btn'> Ladda Ner</button>
                </div>
                <div className='card' key='Daryl'>
                    <img src={Daryl} alt=" Daryl Smylie" />
                    <button onClick={() => setDownloadImg({img: Daryl, fileName: 'DarylSmylie'})} className='download-btn'> Ladda Ner</button>
                </div>
                <div className='card' key='Tommy'>
                    <img src={Tommy} alt=" Tommy Thelin" />
                    <button onClick={() => setDownloadImg({img: Tommy, fileName: 'TommyThelin'})} className='download-btn'> Ladda Ner</button>
                </div>
            </div>
        </div>
    )
}

export default Illustrations