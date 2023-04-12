import { render } from '@testing-library/react';
import NotificationsStack from './notifications-stack';
describe('NotificationsStack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationsStack />);
    expect(baseElement).toBeTruthy();
  });
});
