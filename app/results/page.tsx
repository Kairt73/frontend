import Results from "@/components/Results/Results";

function ResultsPage({searchParams: {correctAnswers}}) {

  return (
    <div className="Results">
      <Results correctAnswers={correctAnswers} />
    </div>
  );
}

export default ResultsPage;
