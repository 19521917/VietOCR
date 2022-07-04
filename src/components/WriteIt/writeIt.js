import Draw from "../Draw/draw.js";

const WriteIt = () => {
  return (
    <section id="howitworks" class="section">
      <div class="title">
        <h2>
          Write It <span>Yourself</span>
        </h2>
      </div>
      <div className="howitworks--canvas">
        <Draw />
      </div>
    </section>
  );
};

export default WriteIt;
