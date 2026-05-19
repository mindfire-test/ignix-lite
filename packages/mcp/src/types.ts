export type ToolName =
  | "list_components"
  | "get_manifest"
  | "get_emmet"
  | "validate"

export type ToolRequest = {
  params: {
    name: ToolName
    arguments?: unknown
  }
}

export type MCPResponse = {
  content: {
    type: "text"
    text: string
  }[]
}

export type ManifestProp = {
  type: string

  values?: string[]

  default?: string | boolean

  native?: boolean

  agent_hint?: string
}

export type ManifestExample = {
  label: string

  emmet: string

  html: string
}

export type Manifest = {
  component: string

  version: string

  description: string

  element: string

  emmet: string

  tokens: number

  props: Record<
    string,
    ManifestProp
  >

  states?: string[]

  forbidden_props?: string[]

  required_props?: string[]

  required_slots?: string[]

  required_wrapper?: string

  methods?: string[]

  do?: string[]

  dont?: string[]

  examples?: ManifestExample[]

  extends?: string
}