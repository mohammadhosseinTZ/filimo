import styles from "./styles.module.css"
import { TCasts } from '../hero/Hero'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"

function Watch({ casts }: { casts?: TCasts[] }) {
  return (
    <div className={styles.casts}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={6.5}
        className={styles.swiper_casts_container}
        navigation={{
          nextEl: ".casts-next",
          prevEl: ".casts-prev",
        }}

      >

        {casts && casts.map(el => (
          <SwiperSlide key={el.id}>
            <div className={styles.swiper_slide}>
              <img src={el.profile_path} alt="" />
              <h5>{el.name}</h5>
            </div>
          </SwiperSlide>
        ))}

        <div className="casts-prev ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 20.5a1 1 0 0 1-.68-.27l-8-7.5a1 1 0 0 1 0-1.46l8-7.5a1 1 0 1 1 1.36 1.46L9.46 12l7.22 6.77a1 1 0 0 1 .05 1.41 1 1 0 0 1-.73.32"></path></svg>
        </div>
        <div className="casts-next ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 20.5a1 1 0 0 1-.73-.32 1 1 0 0 1 .05-1.41L14.54 12 7.32 5.23a1 1 0 0 1 1.36-1.46l8 7.5a1 1 0 0 1 0 1.46l-8 7.5a1 1 0 0 1-.68.27"></path></svg>
        </div>
      </Swiper>
    </div>
  )
}

export default Watch