import { useState } from "react";
import KalorienTracker from "./KalorienTracker";

export default function Calorie() {
  const [bodySize, setBodySize] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState(true);
  const [activity, setActivity] = useState(0);

  const [calBase, setCalBase] = useState(0);
  const [calWithActiv, setCalWithActiv] = useState(0);

  const [kjBase, setkjBase] = useState(0);
  const [kjWithActiv, setkjWithActiv] = useState(0);

  function calculateCaloriesFemale() {
    const calBase = 66.47 + 13.7 * weight + 5 * bodySize - 6.8 * age;
    const calWithActiv = calBase * activity;
    const kjBase = calBase * 4.184;
    const kjActiv = calWithActiv * 4.184;
    const roundedkjBase = Number(kjBase.toFixed(2));
    const roundedkjActiv = Number(kjActiv.toFixed(2));
    const roundedCalBase = Number(calBase.toFixed(2));
    const roundedCalWithActiv = Number(calWithActiv.toFixed(2));
    setCalBase(roundedCalBase);
    setCalWithActiv(roundedCalWithActiv);
    setkjBase(roundedkjBase);
    setkjWithActiv(roundedkjActiv);
  }

  function calculateCaloriesMale() {
    const calBase = 655.1 + 9.6 * weight + 1.8 * bodySize - 4.7 * age;
    const calWithActiv = calBase * activity;
    const kjBase = calBase * 4.184;
    const kjActiv = calWithActiv * 4.184;
    const roundedkjBase = Number(kjBase.toFixed(2));
    const roundedkjActiv = Number(kjActiv.toFixed(2));
    const roundedCalBase = Number(calBase.toFixed(2));
    const roundedCalWithActiv = Number(calWithActiv.toFixed(2));
    setCalBase(roundedCalBase);
    setCalWithActiv(roundedCalWithActiv);
    setkjBase(roundedkjBase);
    setkjWithActiv(roundedkjActiv);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!gender) {
      calculateCaloriesMale();
    } else {
      calculateCaloriesFemale();
    }
  }

  return (
    <section id="Calorie">
      <div>
        <h2>Test your daily Calorie Requirement</h2>
        <p>
          To determine your daily calorie requirement, we need some information
          about your age, gender, weight, height and activity level. Enter this
          information to calculate your individual requirements.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bodySize">Body size (in cm)</label>
          <input
            type="number"
            id="bodySize"
            onChange={(e) => setBodySize(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="age">Age in years</label>
          <input
            type="number"
            id="age"
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="weight">weight in kg</label>
          <input
            type="number"
            id="weight"
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            onChange={(e) => setGender(Boolean(e.target.value))}
          >
            <option value="none">chooseGender</option>
            <option value="true">female</option>
            <option value="false">male</option>
          </select>
        </div>
        <div>
          <label htmlFor="Activity">Activity</label>
          <select
            name="Activity"
            id="Activity"
            onChange={(e) => setActivity(Number(e.target.value))}
          >
            <option value="1.2">
              Exclusively sedentary work with little or no physical activity in
              leisure time
            </option>
            <option value="1.35">one or two times per week</option>
            <option value="1.5">three times per week</option>
            <option value="1.7">four times per week</option>
            <option value="1.9">five or six times per week</option>
            <option value="2.2">every day ist an action day</option>
          </select>
        </div>
        <button>Calculate</button>
        {/* output */}
        <table>
          <tr>
            <th> </th>
            <th>kcal</th>
            <th>kj</th>
          </tr>
          <tr>
            <td>Basal Metabolic Rate</td>
            <td>{`${calBase}`} kcal</td>
            <td>{`${kjBase}`}</td>
          </tr>
          <tr>
            <td>Total Daily Energy Expenditure</td>
            <td>{`${calWithActiv}`} kcal</td>
            <td>{`${kjWithActiv}`}</td>
          </tr>
        </table>
      </form>
      <KalorienTracker calWithActiv={calWithActiv} />
    </section>
  );
}
