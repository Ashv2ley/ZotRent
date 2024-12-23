import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation

const RoomRentalForm = () => {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [roommateCount, setRoommateCount] = useState("");
  const [sqft, setSqft] = useState("");
  const [petPolicy, setPetPolicy] = useState("");
  const [addons, setAddons] = useState("");
  const [pricingPolicy, setPricingPolicy] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [rent, setRent] = useState("");
  const [photos, setPhotos] = useState([]);

  const navigate = useNavigate(); // React Router hook for programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Add form validation or data submission logic here if needed

    // Navigate to the Thank You page programmatically
    navigate('/thank-you');
  };

  const styles = {
    questioning: {
      paddingTop: "2.5%",
      paddingRight: "10%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    questions: {
      paddingTop: "2.5%",
      paddingLeft: "10%",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      alignItems: "flex-start",
    },
    introduction: {
      paddingRight: "25%",
    },
    inputFullWidth: {
      width: "100%",
    },
    inputPartialWidth: {
      width: "31.6%",
    },
    textArea: {
      width: "100%",
      height: "100px",
      padding: "10px",
      textAlign: "left",
      verticalAlign: "top",
      display: "block",
    },
    submitButton: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      cursor: "pointer",
      textDecoration: "none", // Ensures the link does not look underlined
    },
    PricingPolicy: {
      textAlign: "left",
    },
  };

  return (
    <form className="Questioning" style={styles.questioning} onSubmit={handleSubmit}>
      <h3 id="Introduction" style={styles.introduction}>
        Tell us a little more about this room!
      </h3>
      <div className="Questions" style={styles.questions}>
        <p>What's the address of this property?</p>
        <input
          className="inputs"
          id="StreetAddress"
          placeholder="Street Address"
          style={styles.inputFullWidth}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <div style={{ display: "flex", gap: "5px", width: "100%" }}>
          <input
            className="inputs"
            id="City"
            placeholder="City"
            style={styles.inputPartialWidth}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="inputs"
            id="State"
            placeholder="State"
            style={styles.inputPartialWidth}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            className="inputs"
            id="Zip"
            placeholder="Zip Code"
            style={styles.inputPartialWidth}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>
        <p>How many roommates would a renter have?</p>
        <input
          className="inputs"
          id="RoommateCount"
          type="number"
          step="1"
          style={styles.inputFullWidth}
          onChange={(e) => setRoommateCount(e.target.value)}
        />
        <p>What's the total square footage of this room?</p>
        <input
          className="inputs"
          id="sqft"
          style={styles.inputFullWidth}
          onChange={(e) => setSqft(e.target.value)}
        />
        <p>
          How would you describe your pet policy? Be as specific as possible.
        </p>
        <textarea
          className="TextAreas"
          id="PetPolicy"
          placeholder="Describe here"
          style={styles.textArea}
          onChange={(e) => setPetPolicy(e.target.value)}
        ></textarea>
        <p>
          What amenities/appliances are provided with the rent price?
        </p>
        <textarea
          className="TextAreas"
          id="Addons"
          placeholder="Describe here"
          style={styles.textArea}
          onChange={(e) => setAddons(e.target.value)}
        ></textarea>
        <p>
          Describe your pricing policy. This includes any security deposits,
          electricity/water that may be paid separately, etc.
        </p>
        <textarea
          className="TextAreas"
          id="PricingPolicy"
          placeholder="Describe here"
          style={styles.textArea}
          onChange={(e) => setPricingPolicy(e.target.value)}
        ></textarea>
        <p>Is there any other information you'd like to add about your apartment?</p>
        <textarea
          className="TextAreas"
          id="OtherInfo"
          placeholder="Describe here"
          style={styles.textArea}
          onChange={(e) => setOtherInfo(e.target.value)}
        ></textarea>
        <p>What is your asking monthly rent?</p>
        <input
          className="inputs"
          id="Rent"
          placeholder="Type here"
          style={styles.inputPartialWidth}
          onChange={(e) => setRent(e.target.value)}
        />
        <p>Please upload any photos you have of this apartment:</p>
        <input
          type="file"
          id="Photos[]"
          name="myfile"
          multiple="multiple"
          onChange={(e) => setPhotos([...e.target.files])}
        />
        <Link to="/thank-you" style={styles.submitButton}>
          Upload Listing
        </Link>
      </div>
    </form>
  );
};

export default RoomRentalForm;
