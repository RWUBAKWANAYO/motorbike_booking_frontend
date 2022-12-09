import './Skeleton.css';

export const CardSkeleton = () => (
  Array.from(Array(9).keys()).map((card) => (
    <div className="skeleton-card" key={card}>
      <div className="skeleton1" />
      {Array.from(Array(3).keys()).map((num) => <div className="skeleton2" key={num} />)}
      <div className="skeleton3">
        {Array.from(Array(3).keys()).map((num) => <div key={num} />)}
      </div>
    </div>
  ))
);

export const TableSkeleton = () => <div />;
