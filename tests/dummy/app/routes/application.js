import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        alt: '01',
        img: 'img/Dribbble1/1.jpg',
        link: 'https://dribbble.com/forefathers',
        title: 'Forefathers'
      },
      {
        alt: '021',
        img: 'img/Dribbble1/2_1.jpg',
        link: 'https://dribbble.com/JulienLavallee',
        title: 'Julien Lavallee'
      }
    ];
  }
});
