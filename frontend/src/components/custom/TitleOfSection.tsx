interface Props {
  title: string;
}

const TitleOfSection: React.FC<Props> = ({ title }) => {
  return (
    <div className="w-full flex justify-start items-center py-4 text-[var(--headline)] text-2xl font-bold">
      <h1>{title}</h1>
    </div>
  );
};

export default TitleOfSection;
