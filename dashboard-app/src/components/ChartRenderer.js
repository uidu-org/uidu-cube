import React from 'react';
import PropTypes from 'prop-types';
import { useCubeQuery } from '@cubejs-client/react';
import { Spin, Row, Col, Statistic, Table } from 'antd';
import {
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
} from 'recharts';

const CartesianChart = ({ resultSet, children, ChartComponent }) => (
  <ResponsiveContainer width="100%" height={350}>
    <ChartComponent data={resultSet.chartPivot()}>
      <XAxis dataKey="x" />
      <YAxis />
      <CartesianGrid />
      {children}
      <Legend />
      <Tooltip />
    </ChartComponent>
  </ResponsiveContainer>
);

const colors = ['#FF6492', '#141446', '#7A77FF'];

const stackedChartData = (resultSet) => {
  const data = resultSet
    .pivot()
    .map(({ xValues, yValuesArray }) =>
      yValuesArray.map(([yValues, m]) => ({
        x: resultSet.axisValuesString(xValues, ', '),
        color: resultSet.axisValuesString(yValues, ', '),
        measure: m && Number.parseFloat(m),
      }))
    )
    .reduce((a, b) => a.concat(b), []);
  return data;
};

const TypeToChartComponent = {};
const TypeToMemoChartComponent = Object.keys(TypeToChartComponent)
  .map((key) => ({
    [key]: React.memo(TypeToChartComponent[key]),
  }))
  .reduce((a, b) => ({ ...a, ...b }));

const renderChart = (Component) => ({ resultSet, error, pivotConfig }) =>
  (resultSet && (
    <Component resultSet={resultSet} pivotConfig={pivotConfig} />
  )) ||
  (error && error.toString()) || <Spin />;

const ChartRenderer = ({ vizState }) => {
  const { query, chartType, pivotConfig } = vizState;
  const component = TypeToMemoChartComponent[chartType];
  const renderProps = useCubeQuery(query);
  return component && renderChart(component)({ ...renderProps, pivotConfig });
};

ChartRenderer.propTypes = {
  vizState: PropTypes.object,
  cubejsApi: PropTypes.object,
};
ChartRenderer.defaultProps = {
  vizState: {},
  cubejsApi: null,
};
export default ChartRenderer;
