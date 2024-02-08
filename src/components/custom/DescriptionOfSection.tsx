interface Props {
  description: string;
}

const DescriptionOfSection: React.FC<Props> = ({ description }) => {
  return (
    <p className="text-[var(--paragraph)] text-sm max-md:text-sm max-md:w-full max-w-[50%] max-md:max-w-none">
      {description}
    </p>
  );
};

export default DescriptionOfSection;
