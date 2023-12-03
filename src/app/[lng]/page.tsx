import Image from 'next/image';
import { LngParam, getDictionary } from '../../../lib/dictionary';
import LocaleSwitcher from '@/src/components/switchLng';
import { contact_img } from '@/src/components/image';

export default async function Home({ params: { lng } }: LngParam) {
  // lng is
  const { hi } = await getDictionary(lng);

  return (
    <main>
      <div className="bg-main flex w-full justify-center pb-80 pt-4">
        <div>
          <LocaleSwitcher />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:max-w-3xl md:flex-row">
          <p>{hi}</p>
          <p className="max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            consequuntur, esse enim ipsa aut accusantium suscipit, modi ullam
            explicabo quas veritatis sapiente excepturi amet, voluptate quod
            quidem! Nobis, est inventore?
          </p>
          <div className="relative aspect-[3/4] w-96 rounded-sm border-2 border-primary">
            <Image src={'/assets/work-1.png'} alt="" fill />
          </div>
        </div>
      </div>
    </main>
  );
}
