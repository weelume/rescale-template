import test from 'node:test'
import assert from 'node:assert/strict'
import {plans} from '../src/features/site-templates/catalog/rescale/content.ts'

test('套餐月费及年付月均价与参考站实际切换结果一致', () => {
  assert.deepEqual(plans.map(plan => [plan.monthly, plan.annualMonthly]), [[29, 21], [79, 57], [199, 145]])
  assert.deepEqual(plans.map(plan => plan.annualMonthly * 12), [252, 684, 1740])
})
