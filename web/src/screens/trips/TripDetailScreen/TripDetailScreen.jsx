import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { DiaryBox, DocumentsBox, MapBox } from "../../../components";
// import { Section } from "../../../components";
import { getTrip } from "../../../services/trip-services";


import "./TripDetailScreen.css";

function TripDetailScreen() {
  const [trip, setTrip] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getTrip(id).then((trip) => setTrip(trip));
  }, [id]);

  if (!trip) {
    return <></>;
  }

  return (
    <>
      {/* {console.log(trip.data.city)} */}

      <div className="col-12">
        <img
          src={trip.data.coverPhoto}
          alt="coverPhoto"
          className="w-100 rounded"
        />
        <h2 className="my-3">{trip.data.city}</h2>
      </div>
      <div className="">
        <p>{trip.data.description}</p>
        <p className="m-0">{trip.data.startDate}</p>
        <p>{trip.data.endDate}</p>
      </div>

      {/* <div className="d-flex flex-row boxes">
        <DocumentsBox />
        <MapBox />
      </div> */}

      <div className="d-flex flex-row boxes">

        <Link to={`/${id}/documentos`} type="button">
          <DocumentsBox />
        </Link>

        <Link to={`/${id}/mapa`} type="button">
          <MapBox />
        </Link>

        <Link to={`/${id}/diario-de-viaje`} type="button">
          <DiaryBox />
        </Link>
       
      </div>
    </>
  );
}

export default TripDetailScreen;
