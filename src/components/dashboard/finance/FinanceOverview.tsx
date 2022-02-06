import type { FC } from 'react';
import numeral from 'numeral';
import Chart from 'react-apexcharts';
import { Box, Grid, Typography, Card } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const ChartLine: FC = () => {
  const theme = useTheme();

  const chart = {
    options: {
      chart: {
        background: 'transparent',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      colors: ['#7783DB'],
      dataLabels: {
        enabled: false
      },
      grid: {
        show: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      theme: {
        mode: theme.palette.mode
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false
      }
    },
    series: [
      {
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      }
    ]
  };

  return (
    <Chart
      type="line"
      {...chart}
    />
  );
};

const data = {
  sales: {
    actualYear: 152996,
    lastYear: 121420
  },
  profit: {
    actualYear: 32100,
    lastYear: 25200
  },
  cost: {
    actualYear: 99700,
    lastYear: 68300
  }
};

const FinanceOverview: FC = (props) => (
  <Card {...props}>
    <Grid container>
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          alignItems: 'center',
          borderRight: (theme) => (
            {
              md: `1px solid ${theme.palette.divider}`
            }
          ),
          borderBottom: (theme) => (
            {
              md: 'none',
              xs: `1px solid ${theme.palette.divider}`
            }
          ),
          display: 'flex',
          justifyContent: 'space-between',
          p: 3
        }}
      >
        <div>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            Sales
          </Typography>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            {numeral(data.sales.actualYear).format('$0,0.00')}
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            vs.
            {numeral(data.sales.lastYear).format('$0,0.00')}
            &nbsp;
            last year
          </Typography>
        </div>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: 54,
            width: 177
          }}
        >
          <ChartLine />
        </Box>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          alignItems: 'center',
          borderRight: (theme) => (
            {
              md: `1px solid ${theme.palette.divider}`
            }
          ),
          borderBottom: (theme) => (
            {
              xs: `1px solid ${theme.palette.divider}`,
              md: 'none'
            }
          ),
          display: 'flex',
          justifyContent: 'space-between',
          p: 3
        }}
      >
        <div>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            Cost
          </Typography>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            {numeral(data.cost.actualYear).format('$0,0.00')}
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            vs.
            {numeral(data.cost.lastYear).format('$0,0.00')}
            &nbsp;
            last year
          </Typography>
        </div>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: 54,
            width: 177
          }}
        >
          <ChartLine />
        </Box>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          p: 3
        }}
      >
        <div>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            Profit
          </Typography>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            {numeral(data.profit.actualYear).format('$0,0.00')}

          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            vs.
            {numeral(data.profit.lastYear).format('$0,0.00')}
            &nbsp;
            last year
          </Typography>
        </div>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: 54,
            width: 177
          }}
        >
          <ChartLine />
        </Box>
      </Grid>
    </Grid>
  </Card>
);

export default FinanceOverview;