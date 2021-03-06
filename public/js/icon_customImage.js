setTimeout(() => {
  const elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src =
    '//api-maps.yandex.ru/2.1.77/?load=package.standard&lang=ru-RU&onload=getYaMap';
  document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);

function getYaMap() {
  const myMap = new ymaps.Map(
    'map',
    {
      center: [55.798682, 37.695816],
      zoom: 9,
      controls: ['routePanelControl'],
    },
    {
      searchControlProvider: 'yandex#search',
    }
  );

  const myPlacemark = new ymaps.Placemark(
    myMap.getCenter(),
    {
      hintContent: 'Bla Bla Company 125009 Moscow, Red Square 1',
      balloonContent: 'The awesome place in the world!',
    },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './img/map/myIcon.gif',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
