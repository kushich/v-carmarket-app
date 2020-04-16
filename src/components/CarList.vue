<template>
  <div class="row">
    <CarItem v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script>
import CarItem from '@/components/CarItem'
export default {
  components: {
    CarItem,
  },
  data: function() {
    return {
      cars: [
        {
          id: 1,
          image:
            'https://images.wallpaperscraft.com/image/audi_rs4_side_view_black_sunset_101918_960x544.jpg',
          title: 'Audi RS4',
          price: 400,
          tag: 'Featured',
          tagActive: true,
          location: '0 Some St. Munich',
          details: {
            mileage: 4000,
            transmission: 'Automatic',
            year: 2018,
            fuel: 'Petrol',
            body: 'Universal',
            color: 'Black',
          },
        },
        {
          id: 2,
          image:
            'https://images.wallpaperscraft.com/image/range_rover_white_suv_car_96643_960x544.jpg',
          title: 'Range Rover',
          price: 300,
          tag: 'For sale',
          tagActive: false,
          location: '0 Some St. Warsaw',
          details: {
            mileage: 4000,
            transmission: 'Manual',
            year: 2017,
            fuel: 'Petrol',
            body: 'SUV',
            color: 'White',
          },
        },
        {
          id: 3,
          image:
            'https://images.wallpaperscraft.com/image/tesla_s_p85_white_side_view_103836_960x544.jpg',
          title: 'Tesla S',
          price: 450,
          tag: 'Featured',
          tagActive: true,
          location: '0 Some St. Geneva',
          details: {
            mileage: 4000,
            transmission: 'Automatic',
            year: 2015,
            fuel: 'Electric',
            body: 'Sedan',
            color: 'White',
          },
        },
        {
          id: 4,
          image:
            'https://images.wallpaperscraft.com/image/bmw_m3_e92_white_96290_960x544.jpg',
          title: 'BMW M3 E92',
          price: 250,
          tag: 'For sale',
          tagActive: false,
          location: '0 Some St. Minsk',
          details: {
            mileage: 4000,
            transmission: 'Manual',
            year: 2015,
            fuel: 'Petrol',
            body: 'Coupe',
            color: 'White',
          },
        },
        {
          id: 5,
          image:
            'https://images.wallpaperscraft.com/image/audi_rs7_red_side_view_mountain_100460_960x544.jpg',
          title: 'Audi RS7',
          price: 450,
          tag: 'Featured',
          tagActive: true,
          location: '0 Some St. Stockholm',
          details: {
            mileage: 4000,
            transmission: 'Automatic',
            year: 2019,
            fuel: 'Petrol',
            body: 'Sedan',
            color: 'Red',
          },
        },
        {
          id: 6,
          image:
            'https://images.wallpaperscraft.com/image/lexus_gs_side_view_blue_109232_960x544.jpg',
          title: 'Lexus GS',
          price: 450,
          tag: 'Featured',
          tagActive: true,
          location: '0 Some St. Milan',
          details: {
            mileage: 4000,
            transmission: 'Manual',
            year: 2018,
            fuel: 'Automatic',
            body: 'Sedan',
            color: 'Blue',
          },
        },
      ],
    }
  },
}
</script>
