import React, { ReactElement, FC } from "react";
import { Box, Link, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Suspense } from "react";
import { defer, useLoaderData, Await, json } from "react-router-dom";
import { getReactReleases } from "../api/react-releases";
import { ReleaseInfos } from "../../../../shared/release";
// import {json} from "react-router-dom";

type LoaderData = {
  releases: ReleaseInfos;
};

export const releasesLoader = async () => {
  const releases = await getReactReleases();
  const data = json({ releases });
  // return defer(data);
  return data;
};

const ReactReleases: FC<any> = (): ReactElement => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const { releases } = useLoaderData() as LoaderData;

  return (
    <Box sx={{}}>
      <Suspense fallback={<small>Loading React releases...</small>}>
        <Await
          resolve={releases}
          errorElement={<div>Could not load releases 😬</div>}
        >
          <Typography variant="h3">React Releases</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Tag</TableCell>
                  <TableCell align="right">Published at</TableCell>
                  <TableCell align="right">URL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {releases.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.tag_name}</TableCell>
                    <TableCell align="right">{row.published_at}</TableCell>
                    <TableCell align="right">
                      <Link href={row.url} target={"_blank"}>
                        {row.url}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Await>
      </Suspense>
    </Box>
  );
};

export default ReactReleases;
