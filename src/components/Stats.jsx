const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat
        number={stats.numberOfWords}
        label={stats.numberOfWords <= 1 ? "Word" : "Words"}
      />
      <Stat
        number={stats.numbersOfCharacter}
        label={stats.numbersOfCharacter <= 1 ? "Character" : "Characters"}
      />
      <Stat
        number={
          stats.instagramCharacterLeft <= 0 ? 0 : stats.instagramCharacterLeft
        }
        label={"Instagram"}
      />
      <Stat
        number={
          stats.facebookCharacterLeft <= 0 ? 0 : stats.facebookCharacterLeft
        }
        label={"Facebook"}
      />
    </section>
  );
};

export default Stats;

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={
          number < 0 ? "stat__number stat__number--limit" : "stat__number"
        }
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
