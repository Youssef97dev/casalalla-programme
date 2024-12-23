import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/e28ypfnpoadluzx8wtsy",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/ycfub6xp8gjuz3gla8xh",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/r4wuo58bxhpnhufpaeis",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/izirylze8wxm7adeaewb",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/w3fer4hdvbzc1mcla9c3",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/ojybmuxnsftkryhs4ux1",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/ebol3p21f6cjzaei9duu",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/i7mqgy4ik8mhnsj6iecr",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/jb3ab9pc0rc8sopxwnhi",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/wi3nmf7jmw4awu1zehtk",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/gozcno1zhxhtooewuzhh",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/ire8b4lttkaofa5scit3",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/mqjl5dq6d9binkadxuk7",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/L-167_uhoybh",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/casa15_zsi2sk",
];

const Gallery = () => {
  return (
    <div className="bg-casa_2 mx-auto py-5 px-4 mt-3">
      <div className="masonry">
        {images.map((src, index) => (
          <div
            key={index}
            className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden"
          >
            <Image
              src={src}
              alt={`Image casa lalla takerkoust ${index}`}
              layout="responsive"
              width={300}
              height={300}
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
