import { Box } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import tmdbConfig from '../../api/configs/tmdb.config';
import NavigationSwiper from './NavigationSwiper';

const BackdropSlide = ({ backdrops }) => {
  return (
    <NavigationSwiper>
      {[...backdrops].splice(0, 10).map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              padding: '30%',
              backgroundPosition: 'top',
              backgroundSize: 'cover',
              backgroundImage: `url(${tmdbConfig.backdropPath(
                item.file_path
              )})`,
            }}
          />
        </SwiperSlide>
      ))}
    </NavigationSwiper>
  );
};

export default BackdropSlide;
