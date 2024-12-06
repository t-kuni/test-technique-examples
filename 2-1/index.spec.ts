import {jest, describe, it, expect} from '@jest/globals';
import { Calculator, Main } from './index';

describe('Main', () => {
  it('execute()', () => {
    const mockCalculator: Calculator = {
      add: jest.fn()
          .mockReturnValueOnce(30)
          .mockReturnValueOnce(60)
    } as Calculator;

    const main = new Main(mockCalculator);
    main.execute();

    // 呼び出し回数の検証
    expect(mockCalculator.add).toHaveBeenCalledTimes(2)

    // 1回目呼び出し時の引数の検証
    expect(mockCalculator.add).toHaveBeenNthCalledWith(1, 10, 20)
    // 2回目呼び出し時の引数の検証
    expect(mockCalculator.add).toHaveBeenNthCalledWith(2, 30, 30)
  });
});