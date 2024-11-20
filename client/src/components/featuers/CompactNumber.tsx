import MotionNumber from "motion-number";

interface CompactNumberProps {
  value: number | string;
  locales?: string;
}

const CompactNumber: React.FC<CompactNumberProps> = ({
  value,
  locales = "en-US",
}) => {
  return (
    <span className="flex items-center justify-center">
      <MotionNumber
        value={typeof value === "string" ? Number(value) : value}
        format={{ notation: "compact" }}
        locales={locales}
      />
    </span>
  );
};

export default CompactNumber;
