import Image from 'next/image';
import { LngParam, getDictionary } from '../../../lib/dictionary';

export default async function Home({ params: { lng } }: LngParam) {
  return (
    <main>
      <div className="bg-main flex w-full justify-center pb-80 pt-4">
        <div className="flex flex-col-reverse items-center justify-between gap-4 md:max-w-3xl md:flex-row">
          <p className="max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            consequuntur, esse enim ipsa aut accusantium suscipit, modi ullam
            explicabo quas veritatis sapiente excepturi amet, voluptate quod
            quidem! Nobis, est inventore?
          </p>
          <div className="relative aspect-[8/9] w-96 rounded-sm">
            <Image src={'/assets/work-1.png'} sizes="20" alt="" fill />
          </div>
        </div>
      </div>
    </main>
  );
}
