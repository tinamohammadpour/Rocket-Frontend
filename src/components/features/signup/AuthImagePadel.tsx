import Image from 'next/image';

export function AuthImagePanel() {
  return (
    <div className="relative w-full max-w-md mx-auto md:mx-0">
      <div className="relative h-105 md:h-100 aspect-square md:aspect-[1.1] rounded-[14px] overflow-hidden shadow-lg">
        <Image
          src="/images/Auth/padel-court.jpg"
          alt="زمین پدل"
          fill
          className="object-cover"
          priority
        />
        <Image
          src="/images/Auth/padel-racket3.png"
          alt="راکت پدل"
          width={400}
          height={400}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full drop-shadow-2xl"
        />
      </div>

      <Image
        src="/images/Auth/ball.png"
        alt="توپ پدل"
        width={1000}
        height={1000}
        className="absolute -right-8 top-[32%] w-16 h-16 md:w-30 md:h-26 drop-shadow-lg z-10"
      />
    </div>
  );
}
