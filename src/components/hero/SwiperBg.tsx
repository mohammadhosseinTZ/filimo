// Import Swiper React components
import styles from "./styles.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';
import { TMovies } from './Hero';
import Items from "./Items";

function SwiperBg({ movies, isFetching, isPending }: { movies: TMovies[], isFetching: boolean, isPending: boolean }) {
    console.log(movies);

    return (
        <div className={styles.swiper_hero_bg_wrapper}>
            {isFetching || isPending ?
                <div className={`${styles.skelton_hero}  skeleton-wrapper `}>
                    <div className={`${styles.skeleton_image} skeleton-image`}></div>
                </div>
                :
                <Swiper
                    modules={[Autoplay, Navigation, EffectFade]}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    loop={true}
                    className={styles.swiper_hero_container}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    effect="fade"
                >
                    {movies && movies.map(el => (
                        <SwiperSlide key={el.id}>
                            <div className={styles.swiper_slide} style={{ backgroundImage: `url(${el.poster_path})` }}>
                                {el.original_title}
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="custom-prev ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 20.5a1 1 0 0 1-.68-.27l-8-7.5a1 1 0 0 1 0-1.46l8-7.5a1 1 0 1 1 1.36 1.46L9.46 12l7.22 6.77a1 1 0 0 1 .05 1.41 1 1 0 0 1-.73.32"></path></svg>
                    </div>
                    <div className="custom-next ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 20.5a1 1 0 0 1-.73-.32 1 1 0 0 1 .05-1.41L14.54 12 7.32 5.23a1 1 0 0 1 1.36-1.46l8 7.5a1 1 0 0 1 0 1.46l-8 7.5a1 1 0 0 1-.68.27"></path></svg>
                    </div>
                </Swiper>}


            <Items movies={movies} isPending={isPending} isFetching={isFetching} />
        </div>
    )
}

export default SwiperBg