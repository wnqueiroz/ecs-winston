export namespace ECS {
  export interface Root {
    '@timestamp'?: string
    labels?: AnyObject
    message?: string
    tags?: string[]
    agent?: Agent
    client?: Client
    cloud?: Cloud
    container?: Container
    data_stream?: Datastream
    destination?: Client
    dll?: Dll
    dns?: Dns
    ecs?: Ecs
    error?: Error
    event?: Event
    file?: File
    group?: Group
    host?: Host
    http?: Http
    log?: Log
    network?: Network2
    observer?: Observer
    orchestrator?: Orchestrator
    organization?: Account
    package?: Package
    process?: Process
    registry?: Registry
    related?: Related
    rule?: Rule
    server?: Client
    service?: Service
    source?: Client
    span?: Span
    threat?: Threat
    tls?: Tls
    trace?: Span
    transaction?: Span
    url?: Url
    user?: User2
    user_agent?: Useragent
    vulnerability?: Vulnerability
  }

  export interface Vulnerability {
    category?: string[]
    classification?: string
    description?: string
    enumeration?: string
    id?: string
    reference?: string
    report_id?: string
    scanner?: Scanner
    score?: Score
    severity?: string
  }

  export interface Score {
    base?: number
    environmental?: number
    temporal?: number
    version?: string
  }

  export interface Scanner {
    vendor?: string
  }

  export interface Useragent {
    device?: Organization
    name?: string
    original?: string
    os?: Os
    version?: string
  }

  export interface User2 {
    changes?: User
    domain?: string
    effective?: User
    email?: string
    full_name?: string
    group?: Group
    hash?: string
    id?: string
    name?: string
    roles?: string[]
    target?: User
  }

  export interface Tls {
    cipher?: string
    client?: Client2
    curve?: string
    established?: boolean
    next_protocol?: string
    resumed?: boolean
    server?: Server
    version?: string
    version_protocol?: string
  }

  export interface Server {
    certificate?: string
    certificate_chain?: string[]
    hash?: Hash2
    issuer?: string
    ja3s?: string
    not_after?: string
    not_before?: string
    subject?: string
    x509?: X509
  }

  export interface Client2 {
    certificate?: string
    certificate_chain?: string[]
    hash?: Hash2
    issuer?: string
    ja3?: string
    not_after?: string
    not_before?: string
    server_name?: string
    subject?: string
    supported_ciphers?: string[]
    x509?: X509
  }

  export interface Hash2 {
    md5?: string
    sha1?: string
    sha256?: string
  }

  export interface Threat {
    enrichments?: Enrichments
    framework?: string
    group?: Group2
    indicator?: Indicator
    software?: Software
    tactic?: Tactic
    technique?: Technique
  }

  export interface Technique {
    id?: string
    name?: string
    reference?: string
    subtechnique?: Tactic
  }

  export interface Tactic {
    id?: string
    name?: string
    reference?: string
  }

  export interface Software {
    alias?: string[]
    id?: string
    name?: string
    platforms?: string[]
    reference?: string
    type?: string
  }

  export interface Group2 {
    alias?: string[]
    id?: string
    name?: string
    reference?: string
  }

  export interface Enrichments {
    indicator?: Indicator
    matched?: Matched
  }

  export interface Matched {
    atomic?: string
    field?: string
    id?: string
    index?: string
    type?: string
  }

  export interface Indicator {
    as?: As
    confidence?: string
    description?: string
    email?: Email
    file?: File
    first_seen?: string
    geo?: Geo
    ip?: string
    last_seen?: string
    marking?: Marking
    modified_at?: string
    port?: number
    provider?: string
    reference?: string
    registry?: Registry
    scanner_stats?: number
    sightings?: number
    type?: string
    url?: Url
    x509?: X509
  }

  export interface Url {
    domain?: string
    extension?: string
    fragment?: string
    full?: string
    original?: string
    password?: string
    path?: string
    port?: number
    query?: string
    registered_domain?: string
    scheme?: string
    subdomain?: string
    top_level_domain?: string
    username?: string
  }

  export interface Marking {
    tlp?: string
  }

  export interface Email {
    address?: string
  }

  export interface Span {
    id?: string
  }

  export interface Service {
    address?: string
    environment?: string
    ephemeral_id?: string
    id?: string
    name?: string
    node?: Organization
    state?: string
    type?: string
    version?: string
  }

  export interface Rule {
    author?: string[]
    category?: string
    description?: string
    id?: string
    license?: string
    name?: string
    reference?: string
    ruleset?: string
    uuid?: string
    version?: string
  }

  export interface Related {
    hash?: string
    hosts?: string
    ip?: string
    user?: string
  }

  export interface Registry {
    data?: Data
    hive?: string
    key?: string
    path?: string
    value?: string
  }

  export interface Data {
    bytes?: string
    strings?: string
    type?: string
  }

  export interface Process {
    args?: string[]
    args_count?: number
    code_signature?: Codesignature
    command_line?: string
    elf?: Elf
    end?: string
    entity_id?: string
    executable?: string
    exit_code?: number
    hash?: Hash
    name?: string
    parent?: Parent
    pe?: Pe
    pgid?: number
    pid?: number
    ppid?: number
    start?: string
    thread?: Thread
    title?: string
    uptime?: number
    working_directory?: string
  }

  export interface Parent {
    args?: string[]
    args_count?: number
    code_signature?: Codesignature
    command_line?: string
    elf?: Elf
    end?: string
    entity_id?: string
    executable?: string
    exit_code?: number
    hash?: Hash
    name?: string
    pe?: Pe
    pgid?: number
    pid?: number
    ppid?: number
    start?: string
    thread?: Thread
    title?: string
    uptime?: number
    working_directory?: string
  }

  export interface Thread {
    id?: number
    name?: string
  }

  export interface Package {
    architecture?: string
    build_version?: string
    checksum?: string
    description?: string
    install_scope?: string
    installed?: string
    license?: string
    name?: string
    path?: string
    reference?: string
    size?: number
    type?: string
    version?: string
  }

  export interface Orchestrator {
    api_version?: string
    cluster?: Cluster
    namespace?: string
    organization?: string
    resource?: Resource
    type?: string
  }

  export interface Resource {
    name?: string
    type?: string
  }

  export interface Cluster {
    name?: string
    url?: string
    version?: string
  }

  export interface Observer {
    egress?: Egress2
    geo?: Geo
    hostname?: string
    ingress?: Egress2
    ip?: string
    mac?: string[]
    name?: string
    os?: Os
    product?: string
    serial_number?: string
    type?: string
    vendor?: string
    version?: string
  }

  export interface Egress2 {
    interface?: Interface
    vlan?: Account
    zone?: string
  }

  export interface Interface {
    alias?: string
    id?: string
    name?: string
  }

  export interface Network2 {
    application?: string
    bytes?: number
    community_id?: string
    direction?: string
    forwarded_ip?: string
    iana_number?: string
    inner?: Inner
    name?: string
    packets?: number
    protocol?: string
    transport?: string
    type?: string
    vlan?: Account
  }

  export interface Inner {
    vlan?: Account
  }

  export interface Log {
    file?: File2
    level?: string
    logger?: string
    origin?: Origin
    original?: string
    syslog?: Syslog
  }

  export interface Syslog {
    facility?: Facility
    priority?: number
    severity?: Facility
  }

  export interface Facility {
    code?: number
    name?: string
  }

  export interface Origin {
    file?: File3
    function?: string
  }

  export interface File3 {
    line?: number
    name?: string
  }

  export interface File2 {
    path?: string
  }

  export interface Http {
    request?: Request
    response?: Response
    version?: string
  }

  export interface Response {
    body?: Body
    bytes?: number
    mime_type?: string
    status_code?: number
  }

  export interface Request {
    body?: Body
    bytes?: number
    id?: string
    method?: string
    mime_type?: string
    referrer?: string
  }

  export interface Body {
    bytes?: number
    content?: AnyObject
  }

  export interface Host {
    architecture?: string
    cpu?: Cpu
    disk?: Disk
    domain?: string
    geo?: Geo
    hostname?: string
    id?: string
    ip?: string
    mac?: string[]
    name?: string
    network?: Network
    os?: Os
    type?: string
    uptime?: number
    user?: User
  }

  export interface Os {
    family?: string
    full?: string
    kernel?: string
    name?: string
    platform?: string
    type?: string
    version?: string
  }

  export interface Network {
    egress?: Egress
    ingress?: Egress
  }

  export interface Egress {
    bytes?: number
    packets?: number
  }

  export interface Disk {
    read?: Read
    write?: Read
  }

  export interface Read {
    bytes?: number
  }

  export interface Cpu {
    usage?: number
  }

  export interface File {
    accessed?: string
    attributes?: string[]
    code_signature?: Codesignature
    created?: string
    ctime?: string
    device?: string
    directory?: string
    drive_letter?: string
    elf?: Elf
    extension?: string
    fork_name?: string
    gid?: string
    group?: string
    hash?: Hash
    inode?: string
    mime_type?: string
    mode?: string
    mtime?: string
    name?: string
    owner?: string
    path?: string
    pe?: Pe
    size?: number
    target_path?: string
    type?: string
    uid?: string
    x509?: X509
  }

  export interface X509 {
    alternative_names?: string
    issuer?: Issuer
    not_after?: string
    not_before?: string
    public_key_algorithm?: string
    public_key_curve?: string
    public_key_exponent?: number
    public_key_size?: number
    serial_number?: string
    signature_algorithm?: string
    subject?: Issuer
    version_number?: string
  }

  export interface Issuer {
    common_name?: string
    country?: string
    distinguished_name?: string
    locality?: string
    organization?: string
    organizational_unit?: string
    state_or_province?: string
  }

  export interface Elf {
    architecture?: string
    byte_order?: string
    cpu_type?: string
    creation_date?: string
    exports?: string
    header?: Header
    imports?: string
    sections?: Sections
    segments?: Segments
    shared_libraries?: string
    telfhash?: string
  }

  export interface Segments {
    sections?: string
    type?: string
  }

  export interface Sections {
    chi2?: number
    entropy?: number
    flags?: string
    name?: string
    physical_offset?: string
    physical_size?: number
    type?: string
    virtual_address?: number
    virtual_size?: number
  }

  export interface Header {
    abi_version?: string
    class?: string
    data?: string
    entrypoint?: number
    object_version?: string
    os_abi?: string
    type?: string
    version?: string
  }

  export interface Event {
    action?: string
    agent_id_status?: string
    category?: string
    code?: string
    created?: string
    dataset?: string
    duration?: number
    end?: string
    hash?: string
    id?: string
    ingested?: string
    kind?: string
    module?: string
    original?: string
    outcome?: string
    provider?: string
    reason?: string
    reference?: string
    risk_score?: number
    risk_score_norm?: number
    sequence?: number
    severity?: number
    start?: string
    timezone?: string
    type?: string
    url?: string
  }

  export interface Error {
    code?: string
    id?: string
    message?: string
    stack_trace?: string
    type?: string
  }

  export interface Ecs {
    version?: string
  }

  export interface Dns {
    answers?: Answers
    header_flags?: string[]
    id?: string
    op_code?: string
    question?: Question
    resolved_ip?: string[]
    response_code?: string
    type?: string
  }

  export interface Question {
    class?: string
    name?: string
    registered_domain?: string
    subdomain?: string
    top_level_domain?: string
    type?: string
  }

  export interface Answers {
    class?: string
    data?: string
    name?: string
    ttl?: number
    type?: string
  }

  export interface Dll {
    code_signature?: Codesignature
    hash?: Hash
    name?: string
    path?: string
    pe?: Pe
  }

  export interface Pe {
    architecture?: string
    company?: string
    description?: string
    file_version?: string
    imphash?: string
    original_file_name?: string
    product?: string
  }

  export interface Hash {
    md5?: string
    sha1?: string
    sha256?: string
    sha512?: string
    ssdeep?: string
  }

  export interface Codesignature {
    digest_algorithm?: string
    exists?: boolean
    signing_id?: string
    status?: string
    subject_name?: string
    team_id?: string
    timestamp?: string
    trusted?: boolean
    valid?: boolean
  }

  export interface Datastream {
    dataset?: string
    namespace?: string
    type?: string
  }

  export interface Container {
    id?: string
    image?: Image
    labels?: AnyObject
    name?: string
    runtime?: string
  }

  export interface Image {
    name?: string
    tag?: string
  }

  export interface Cloud {
    account?: Account
    availability_zone?: string
    instance?: Account
    machine?: Machine
    project?: Account
    provider?: string
    region?: string
    service?: Organization
  }

  export interface Machine {
    type?: string
  }

  export interface Account {
    id?: string
    name?: string
  }

  export interface Client {
    address?: string
    as?: As
    bytes?: number
    domain?: string
    geo?: Geo
    ip?: string
    mac?: string
    nat?: Nat
    packets?: number
    port?: number
    registered_domain?: string
    subdomain?: string
    top_level_domain?: string
    user?: User
  }

  export interface User {
    domain?: string
    email?: string
    full_name?: string
    group?: Group
    hash?: string
    id?: string
    name?: string
    roles?: string[]
  }

  export interface Group {
    domain?: string
    id?: string
    name?: string
  }

  export interface Nat {
    ip?: string
    port?: number
  }

  export interface Geo {
    city_name?: string
    continent_code?: string
    continent_name?: string
    country_iso_code?: string
    country_name?: string
    location?: Location
    name?: string
    postal_code?: string
    region_iso_code?: string
    region_name?: string
    timezone?: string
  }

  export interface Location {
    lon?: number
    lat?: number
  }

  export interface As {
    number?: number
    organization?: Organization
  }

  export interface Organization {
    name?: string
  }

  export interface Agent {
    build?: Build
    ephemeral_id?: string
    id?: string
    name?: string
    type?: string
    version?: string
  }

  export interface Build {
    original?: string
  }

  export type AnyObject = Record<string, unknown>

  export type Fields = Omit<Root, '@timestamp' | 'ecs'>
}
