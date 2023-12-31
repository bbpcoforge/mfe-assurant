import React from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import AccountDetails from "./AccountDetails";
import ViewStatements from "./ViewStatements";
import { defaultCurrency, getAccountDetails } from "../../../shared/constants";
import palette from "../../../shared/theme/palette";

export default function Activity({ userDetails }) {
  const accounts = getAccountDetails(userDetails?.organization);
  const [currency, setCurrency] = React.useState("AED");
  let { accno } = useParams();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const sellectedAccount = accounts.filter((ac) => ac.accountNo === accno);
  const account = sellectedAccount[0] || accounts[0];
  const sxtd = {
    font: "Roboto, medium",
    padding: "5px",
    fontSize: "0.6rem",
    border: "none",
  };
  const sxtdrow = {
    padding: "5px",
    fontWeight: "bold",
    color: palette.primary.main,
    fontSize: "0.6rem",
    border: "none",
  };
  const sxhdcell = {
    font: "Roboto, medium",
    px: "5px",
    py: "10px",
    fontSize: "0.8rem",
    border: "none",
  };
  const sxbdcell = {
    p: "5px",
    color: palette.grey.darker,
    fontSize: "0.8rem",
    border: "none",
  };
  return (
    <Grid
      container
      spacing={3}
      justifyContent="end"
      sx={{
        background: "#EEE",
        my: matches ? "2rem" : undefined,
        px: matches ? 2 : 0,
      }}
    >
      <Grid item xs={12} md={12} lg={10}>
        <Paper
          sx={{
            background: "#FFFFFF 0% 0% no-repeat padding-box;",
            boxShadow: "0px 3px 6px #0000001F",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Typography variant="h6" color={palette.primary.main}>
            Account Activity For Account ID
          </Typography>
          <Typography variant="body2" color={palette.grey.light}>
            To see diffrent transaction date, simply enter the required date in
            the Date Range.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={4}>
        <ViewStatements />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <AccountDetails account={account} currency={currency} />
      </Grid>
      <Grid item xs={12} md={12} lg={10}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" color={palette.primary.main}>
              Transaction Details
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table aria-label="simple table">
                <caption>1-1 Accounts</caption>
                <TableHead>
                  <TableRow>
                    <TableCell sx={sxhdcell}>Date</TableCell>
                    <TableCell sx={sxhdcell}>Narative</TableCell>
                    <TableCell sx={sxhdcell}>Debit</TableCell>
                    <TableCell sx={sxhdcell}>Credit</TableCell>
                    <TableCell sx={sxhdcell}>Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ borderBottom: "1px solid #EEE" }}>
                    <TableCell sx={sxbdcell}>06/12/2023</TableCell>
                    <TableCell sx={sxbdcell}>SDEF0123456789</TableCell>
                    <TableCell sx={sxbdcell}></TableCell>
                    <TableCell sx={sxbdcell} className="redacted">
                      {defaultCurrency.symbol} 6598.00
                    </TableCell>
                    <TableCell sx={sxbdcell} className="redacted">
                      {defaultCurrency.symbol} 323234.10
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={10}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" color={palette.primary.main}>
              Total Values
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography variant="body2">Real time balance</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" className="redacted">
                        {defaultCurrency.symbol} 323234.1
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography variant="body2">Real time balance</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" className="redacted">
                        {defaultCurrency.symbol} 323234.1
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
