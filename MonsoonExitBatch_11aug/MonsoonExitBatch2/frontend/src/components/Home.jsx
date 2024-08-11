import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.error("Error in GET request:", err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((res) => {
        alert(res.data.message);
        setData(data.filter((item) => item._id !== id));
      })
      .catch((err) => console.error("Error in DELETE request:", err));
  };

  const handleUpdate = (item) => {
    navigate("/edit", { state: { val: item } });
  };

  return (
    <div className="Mar">
      <Grid container spacing={6}>
        {data.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <img
                  src={val.img_url}
                  className="img-fluid rounded-start"
                  width="100%"
                  alt={val.EmpName}
                />
                <Typography gutterBottom variant="h5">
                  {val.EmpName}
                </Typography>
                <Typography component="div">{val.designation}</Typography>
                <Typography component="div">{val.empId}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(val._id)}
                >
                  Delete
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleUpdate(val)}
                >
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
