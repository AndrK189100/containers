import ErrorRepository from '../errorrepository';

test('translate method', () => {
  expect(ErrorRepository.translate(1)).toBe('error1');
  expect(ErrorRepository.translate(5)).toBe('Unknown error');
});
