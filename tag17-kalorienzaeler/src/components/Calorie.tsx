import { useState } from "react";

export default function Calorie() {
  const [bodySize, setBodySize] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState(true);
  const [activity, setActivity] = useState(0);

  return (
    <section>
      <div>
        <h3>Test your daily Calorie Requirement</h3>
        <p>
          To determine your daily calorie requirement, we need some information
          about your age, gender, weight, height and activity level. Enter this
          information to calculate your individual requirements.
        </p>
      </div>
      <form>
        <div>
          <label htmlFor="bodySize">Body size (in cm)</label>
          <input type="number" id="bodySize" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" />
        </div>
        <div>
          <label htmlFor="weight"></label>
          <input type="number" id="weight" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="none">chooseGender</option>
            <option value="true">female</option>
            <option value="false">male</option>
          </select>
        </div>
        <div>
          <label htmlFor="Activity">Activity</label>
          <select name="Activity" id="Activity">
            <option value="0">
              Exclusively sedentary work with little or no physical activity in
              leisure time
            </option>
            <option value="1">one or two times per week</option>
            <option value="2">three times per week</option>
            <option value="3">four times per week</option>
            <option value="4">five or six times per week</option>
            <option value="5">every day ist an action day</option>
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
            <td>{/* baseKcal */}</td>
            <td>{/* baseKj */}</td>
          </tr>
          <tr>
            <td>Total Daily Energy Expenditure</td>
            <td>{/* expenditureKcal */}</td>
            <td>{/* expenditureKcal */}</td>
          </tr>
        </table>
      </form>
    </section>
  );
}
