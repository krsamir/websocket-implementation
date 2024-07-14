import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BIDDING_ZONE, Card } from "../data/styles";
import { CONSTANT } from "../data/Constants";
import CountUp from "react-countup";
import toast from "react-hot-toast";
import axios from "axios";
import socket from "../socket";

// import BiddingController from "./BiddingController";

function BiddingPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [currentBidValue, setcurrentBidValue] = useState(0);
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.info(socket?.id);
      console.log("Connected to server");
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
    socket.emit("bid:get_detail", id);
    socket.on("bid:cost", (val) => {
      setcurrentBidValue(JSON.parse(atob(val))[id]?.cost);
    });
    return () => {
      console.info("SOCKET CALLED OFF");
      socket.disconnect();
    };
  }, [id]);
  useEffect(() => {
    axios
      .get(`/api/${id}`)
      .then((res) => {
        setItem(res.data?.data ?? null);
      })
      .catch((e) => {
        console.info(e);
      });
  }, [id]);
  const [value, setValue] = useState("");
  const addBidding = () => {
    if (value > currentBidValue) {
      socket.emit("bid:add", { id, value: Number(value) });
      setcurrentBidValue(Number(value));
      setValue(0);
    } else {
      toast.error("Bid cannot be lower than the current value");
    }
  };
  //   const checkWinner = () => {
  //     axios
  //       .post("/api/check", { id, user: socket?.id })
  //       .then((res) => {
  //         console.info(res.data);
  //       })
  //       .catch((e) => {
  //         console.info(e);
  //       });
  //   };
  return (
    <React.Fragment>
      {item ? (
        <BIDDING_ZONE.FLEX_CONTAINER>
          <Card.Container key={item?.id} size={CONSTANT.BIG}>
            <Card.Image
              src={`data:image/*;base64,${item?.image}`}
              size={CONSTANT.BIG}
            />
            <Card.Name>{item?.name}</Card.Name>
            <Card.Description>{item?.description}</Card.Description>
            <Card.Price>
              <Card.Actual>RS. {item?.cost}</Card.Actual>
              <Card.Cost>RS.{item?.actualCost}</Card.Cost>
              <Card.Discount>
                {((item?.actualCost - item?.cost) / item?.actualCost).toFixed(
                  2
                ) * 100}
                % OFF
              </Card.Discount>
            </Card.Price>
          </Card.Container>
          {/* {<BiddingController />} */}
          {/* Bidding Area */}
          <BIDDING_ZONE.CONTAINER>
            <BIDDING_ZONE.TOP_CONTAINER>
              <BIDDING_ZONE.NAME>{item?.name}</BIDDING_ZONE.NAME>
              <BIDDING_ZONE.COST>
                Bidding starts at
                <BIDDING_ZONE.TAG>Rs. {item?.cost ?? 0}</BIDDING_ZONE.TAG>
              </BIDDING_ZONE.COST>
            </BIDDING_ZONE.TOP_CONTAINER>
            <BIDDING_ZONE.BOTTOM>
              <BIDDING_ZONE.COST_CARD>
                {item?.cost && (
                  <>
                    Rs. <CountUp end={item?.cost} />
                  </>
                )}
              </BIDDING_ZONE.COST_CARD>
              <BIDDING_ZONE.COST_CARD>
                {item?.cost && (
                  <>
                    Current Bid is on Rs. <CountUp end={currentBidValue} />
                  </>
                )}
              </BIDDING_ZONE.COST_CARD>
            </BIDDING_ZONE.BOTTOM>
            <BIDDING_ZONE.LOWER_PART>
              <BIDDING_ZONE.INPUT
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e?.code === "Enter") {
                    addBidding();
                  }
                }}
              />
              <BIDDING_ZONE.BUTTON onClick={addBidding}>
                BID
              </BIDDING_ZONE.BUTTON>
            </BIDDING_ZONE.LOWER_PART>
          </BIDDING_ZONE.CONTAINER>
          {/* <button onClick={checkWinner}>Check Winner</button> */}
        </BIDDING_ZONE.FLEX_CONTAINER>
      ) : (
        <h2>ITEM NOT FOUND</h2>
      )}
    </React.Fragment>
  );
}

export default BiddingPage;
