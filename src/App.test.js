import { render, screen } from '@testing-library/react';
import App from './App';

test('📍 Count는 0부터 시작합니다', () => {
  render(<App />);
  // screen object를 이용하여 원하는 element에 접근(접근할 때 ID로)
  const countElement = screen.getByTestId('counter');
  // id가 counter인 element의 텍스트가 0인지 테스트
  expect(countElement).toHaveTextContent('0');
});
