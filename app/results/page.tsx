import Results from "@/components/Results/Results";

interface ResultsPageProps {
  searchParams: {
    correctAnswers: string; // Укажите нужный тип для correctAnswers
  };
}

function ResultsPage({ searchParams: { correctAnswers } }: ResultsPageProps) {
  return (
    <div className="Results">
      <Results correctAnswers={correctAnswers} />
    </div>
  );
}

export default ResultsPage;
