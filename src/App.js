import './tes/css/style.css';
import img from './tes/img/logo.png';
import logo from './tes/img/logo.png';
import logo_t from './tes/img/logo_t.png';
import lokasi from './tes/img/lokasi.png';
import wa from './tes/img/wa.png';
import ig from './tes/img/ig.png';
import pnk from './tes/img/pdd.png'; 
import ImageWithMovingColor from './tes/img_animasi'; 
import BorderBottom from './tes/border-bottom'; 
import Animasiabc from './tes/animasi_abc'; 
import Animasi_contact from './tes/animasi_contact'; 
import Animasi_t from './tes/animasi-t'; 
import Animasi_txt from './tes/animasi_txt'; 


function App() {
  return (
  <div className='layout'>
    <div className='t-layout'>
    <header className='header'>
        <div className='logo'>
            <p>
                BIO
            </p>
            <p style={{color:'rgb(0, 255, 251)'}}>DATA</p>
            <img src={logo} alt=''/>
            </div>
        <nav className='nav'>
            <li ><a style={{color:'rgb(0, 255, 251)'}} href="#">HOME</a></li>
            <li><a href="#tentang">TENTANG</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="#pendidikan">PENDIDIKAN</a></li>
        </nav>
    </header>
    <div className='left-layout'>
    <div className='l-img'>
    {/* <img src={img} alt="" /> */}
    <ImageWithMovingColor src={img} />
    </div>
    </div>
    <div className='right-layout'>
        <div className='r-layout'>
            <h5>HALO,Perkenalkan nama saya</h5>
             <Animasiabc />
            <div className='h'>
            <h5>Dan Saya seorang pelajar di</h5>
            <Animasi_txt/>
            </div>
            <BorderBottom />
        </div>
    </div>
    </div>
    <div className='sec1' id='tentang'>
    <div className='tentang'>
        <div className='l-left'>
            <Animasi_t>
            <div className='l-tnt'>
               
            </div>
                </Animasi_t>
        </div>
        <div className='r-right'>
            <div className='r-img'>
                    <img src={logo_t} alt=''/>
            </div>
        </div>
    </div>
    </div>
    <div className='sec2' id='contact'>
    <div className='contact'>
       <Animasi_contact>
        <a style={{textDecoration: 'none'}} href="https://www.google.com/maps/place/8%C2%B012'01.0%22S+113%C2%B031'17.2%22E/@-8.2002797,113.5188575,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-8.2002797!4d113.5214324?entry=ttu">
        <div className='c-1'>
            <div className='c-11'>
        <img src={lokasi} alt=''/>
            </div>
            <div className='c-111'>
            <p>Lokasi</p>
            </div>
        </div>
        </a>
        </Animasi_contact>
        <Animasi_contact>
        <a style={{textDecoration: 'none'}} href="https://api.whatsapp.com/send?phone=62895351440722">
        <div className='c-2'>
            <div className='c-22'>
        <img src={wa} alt=''/>
            </div>
            <div className='c-222'>
            <p>WhatsApp</p>
            </div>
        </div>
        </a>
        </Animasi_contact>
        <Animasi_contact>
        <a style={{textDecoration: 'none'}} href="https://www.instagram.com/mahbubgofur/">
        <div className='c-3'>
        <div className='c-33'>
        <img src={ig} alt=''/>
            </div>
            <div className='c-333'>
            <p>Instagram</p>
            </div>
        </div>
        </a>
        </Animasi_contact>
    </div>
    </div>  
    <div className='sec3' id='pendidikan'>
        <div className='c-sec3'>
        <div className='sc1'>
             <div className='sc11'>
                <img src={pnk} />
                <div className='gr1'></div>
                <img src={pnk} />
                <div className='gr2'></div>
                <img src={pnk} />
                <div className='gr3'></div>
             </div>
             <div className='sc111'>
            <div className='gr11'>
                <p>2006-2024</p>
               <h2>TK PGRI HARAPAN BANGSA</h2>
               <h4>JL.PB.SUDIRMAN NO.53 GAMBIRONO BANGSALSARI</h4>
            </div>
            <div className='gr22'>
            <p>2006-2024</p>
               <h2>SDN GAMBIRONO 04</h2>
               <h4>JL.PB.SUDIRMAN NO.53 GAMBIRONO BANGSALSARI</h4>
            </div>
            <div className='gr33'>
            <p>2006-2024</p>
               <h2>MTSn 4 JEMBER</h2>
               <h4>Krajan B, Bangsalsari, Kec. Bangsalsari, Kabupaten Jember, Jawa Timur</h4>
            </div>
             </div>
        </div>
        <div className='sc2'>
        <div className='sc22'>
                <img src={pnk} />
                <div className='gr4'></div>
                <img src={pnk} />
                <div className='gr5'></div>
                <img src={pnk} />
                <div className='gr6'></div>
             </div>
             <div className='sc222'>
            <div className='gr44'>
                <p>2006-2024</p>
               <h2>SMK NEGERI 6 JEMBER</h2>
               <h4>Jl. PB.Sudirman, Tekoan, Tanggul Kulon, Kec. Tanggul, Kabupaten Jember, Jawa Timur</h4>
            </div>
            <div className='gr55'>
            <p>?.........................</p>
               <h2>?...................................................</h2>
               <h4>?..............................</h4>
            </div>
            <div className='gr66'>
            <p>?.........................</p>
               <h2>?...................................................</h2>
               <h4>?..............................</h4>
            </div>
             </div>
        </div>
        </div>
    </div>
  </div>
  );
}

export default App;
