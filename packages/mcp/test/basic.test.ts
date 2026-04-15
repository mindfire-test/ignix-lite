import { describe, it, expect } from 'vitest'
import { startServer } from '../src/server'

describe('MCP build test', () => {
  it('should return correct message', () => {
    expect(startServer()).toBe('MCP server is running')
  })
})
