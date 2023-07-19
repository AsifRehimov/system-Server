import { MainPageDiv } from "./MainPage.styled";
import method from "../photo/method.jpg";
import personal from "../photo/personal.jpg";
import web from "../photo/web.jpg";
import call from "../photo/call.png";
import { BsFillTelephoneOutboundFill, BsWhatsapp } from 'react-icons/bs';




function MainPage() {
    return (
        <MainPageDiv>
            <div className="div_main clearfix">
                <h3>Haqqında</h3>
                <div>
                    <img src={personal} alt="about" height="auto" className="col-md-6 col-sm-3 float-md-end mb-3 ms-md-3" />
                    <p>Mən Üzeyir Məmmədli 1994-ci ildə Ağdam rayonun Flan kəndində anadan olmuşam. 2000-ci ildə Mingəçevir şəhər N saylı məktəbində
                        1-ci sinifə getmişəm. 2011-ci ildə Kimya-Biologiya təmayüllü lisseyi bitirib. Elə həmin ildəcə 496 balla Azərbaycan Dövlət Pedeqoji
                        Universitetinə kimya müəllimi kimi qəbul olmuşam. 2014-cü ildə uğurla bitirib hərbi xidmətə başlamışam 1 il sonra müvəffəqiyyətlə bitirib.
                        MİQ imtahnından 50 bal yığaraq Cəlilabad rayon Bəcrəvan kəndinə təyinat almışam. 5 il orada təhsilə töhvə verərək 10-larla şagirdə universitet sevinci yaşatmışam.
                        Hazırda Bərdə rayonu Flan kəndində kimya müəllimi kimi fəaliyyət göstərirəm cari ildən həmçinin online abituriyent hazırlığınada başlamışam.
                    </p>
                </div>
            </div>
            <div className="div_main">
                <h3>Metodika</h3>
                <div>
                    <img src={method} alt="about" height="auto" className="col-md-6 col-sm-3 float-md-end mb-3 ms-md-3" />
                    <p>
                        Metodikamda fərqliliklərə daha çox üstünlük verirəm. Daim imtahansisteminə uyğunlaşır ona uyğun şagirdləri öyrədirəm.
                        DİM imtahanına psixoloji və biliyi ilə şagirdləri hazırlayıram. Daim insan yönümlü öyrətmə methoduna üstünlük verirəm.
                    </p>
                </div>
            </div>
            <div className="div_main">
                <h3>Saytın məqsədi</h3>
                <div>
                    <img src={web} alt="about" height="auto" className="col-md-6 col-sm-3 float-md-end mb-3 ms-md-3" />
                    <p>
                        Bu Sayt vasitəsil siz kimya vəsaitlərinə və videolarına baxa biləcəksiz. Siz noutbook, planşet, telefon və daha çox cihazla istər dərslərə qoşula biləcəksiz istərsədə resurslardan istifadə edə biləcəksiz. Və əgər bəyənərsəniz mənlə əlaqə yaradıb dərslərimə
                        qatıla bilərsiz. Əlaq üçün aşağıda whatsapp və əlaqə nömrəmi yerləşdirəcəm.
                    </p>
                </div>
            </div>
            <div className="div_main">
                <h3>Əlaqə</h3>
                <div>
                    <img src={call} alt="about" height="auto" className="col-md-6 col-sm-3 float-md-end mb-3 ms-md-3" />
                    <p>
                        Bu Sayt vasitəsil siz kimya vəsaitlərinə və videolarına baxa biləcəksiz. Siz noutbook, planşet, telefon və daha çox cihazla istər dərslərə qoşula biləcəksiz istərsədə resurslardan istifadə edə biləcəksiz. Və əgər bəyənərsəniz mənlə əlaqə yaradıb dərslərimə
                        qatıla bilərsiz. Əlaq üçün aşağıda whatsapp və əlaqə nömrəmi yerləşdirəcəm.
                        <a href="tel:+994556616793" className="contact"><BsFillTelephoneOutboundFill className="icon"/> (055)-661-67-93</a>
                        <a href="https://wa.me/994556616793" className="contact"><BsWhatsapp className="icon"/>Whatsappla Əlaqə</a>
                    </p>
                </div>
            </div>
        </MainPageDiv>
    )
}

export default MainPage;