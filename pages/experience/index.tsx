import { Experience } from "@/components/Organisms/Section";
import { IExperience } from "@/components/Organisms/Section/Experience/Experience";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";

export default function ExperiencePage({ data }: { data: IExperience[] }) {
  // console.log(data);
  return (
    <div>
      <Head>
        <title>About Friday</title>
      </Head>
      <Experience data={data} />
    </div>
  );
}

export const getStaticProps = async () => {
  const supaKey = process.env.NEXT_SUPABASE_KEY as string;
  const supaUrl = process.env.NEXT_SUPABASE_URL as string;
  const supabase = createClient(supaUrl, supaKey);

  const { data, error } = await supabase.from("Experience").select();

  return { props: { data: data, error: error } };
};
