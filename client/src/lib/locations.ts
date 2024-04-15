const beach = [
  'https://greatruns.com/wp-content/uploads/2016/11/santa-monica-beach-path.jpg',
  'https://www.californiabeaches.com/wp-content/uploads/2016/11/beachtrail.jpg',
  'https://www.contoursrun.co.uk/data/route_images/run-norfolk-coast-path-5e0b19a7b6efc.jpg',
  'https://greatruns.com/wp-content/uploads/2019/04/View_of_the_Rock_of_Gibraltar_from_La_Li%CC%81nea_de_la_Concepcio%CC%81n.jpg',
  'https://blog.forbestravelguide.com/wp-content/uploads/2013/07/SB-OahuRunning-0719-CreditiStock-SPrada.jpg',
  'https://media.timeout.com/images/103797823/750/562/image.jpg'
]

export function beachUrl(): string {
  const randomNumber = Math.floor(Math.random() * beach.length);
  return beach[randomNumber];
}

const trail = [
  'https://strengthrunning.com/wp-content/uploads/2012/06/Mountain-Trail.jpg',
  'https://cdn.securem2.com/commonimages/pages/2022/2/hudson-crossing-river-trail.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1095094792.jpg',
  'https://cloudfront.traillink.com/photos/sligo-creek-trail_70435_sc.jpg',
  'https://thebarn.bluemountain.ca/wp-content/uploads/2020/07/trav4-550x733.jpg',
  'https://thebarn.bluemountain.ca/wp-content/uploads/2020/07/trav7-768x1024.jpg'
]

export function trailUrl() {
  const randomNumber = Math.floor(Math.random() * trail.length);
  return trail[randomNumber];
}

const track = [
  'https://live.staticflickr.com/3765/9506472265_db3ded590d_h.jpg',
  'https://www.viacor.de/assets/images/4/tvm-chandrasekharan-nair-stadium.jpg.image.784.410-6695cd68.jpg',
  'https://thesmartlocal.com/wp-content/uploads/2023/12/free-running-tracks-10-min.png',
  'https://img.freepik.com/premium-photo/running-track-stadium-field_38678-3340.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2023/5/308669688/ZU/UP/ED/16569354/synthetic-athletic-track.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2023/5/308674556/RU/RW/GG/16569354/athletic-running-track-500x500.jpg'
]

export function trackUrl() {
  const randomNumber = Math.floor(Math.random() * track.length);
  return track[randomNumber];
}

const treadmill = [
  'https://www.gosportsart.com/wp-content/uploads/2019/04/1-SA_18-Verde-Treadmills-075-edit.jpg',
  'https://m.media-amazon.com/images/I/91H1rOiJ8lL._AC_UF1000,1000_QL80_.jpg',
  'https://www.mensjournal.com/.image/t_share/MjAzMzUyMzA1MDAzNjY4OTcz/nordictrack-2450.jpg',
  'https://www.lifehacker.com.au/wp-content/uploads/sites/4/2023/02/16/2022_08_17_TREAD_PRODUCT_WIDE_11757-1.jpg?w=1024',
  'https://www.gymmarine.com/wp-content/uploads/2018/07/Entertainment-Room-T3-C3_mr.jpg',
  'https://www.gymmarine.com/wp-content/uploads/2016/06/Life-Fitness-F3-Folding-Treadmill-with-GO-Console-3_800x572.jpg'
]

export function treadmillUrl() {
  const randomNumber = Math.floor(Math.random() * treadmill.length);
  return treadmill[randomNumber];
}
