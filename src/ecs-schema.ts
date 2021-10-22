import { AnySchema, ObjectSchema, Schema } from 'fast-json-stringify'

const anyOf = [
  { type: 'null' },
  { type: 'array' },
  { type: 'string' },
  { type: 'number' },
  { type: 'integer' },
  { type: 'boolean' },
  { type: 'object', additionalProperties: true },
] as AnySchema[] | ObjectSchema[]

export const ecsSchema: Schema = {
  type: 'object',
  additionalProperties: true,
  properties: {
    '@timestamp': {
      type: 'string',
    },
    labels: {
      type: 'object',
      additionalProperties: true,
    },
    message: {
      type: 'string',
    },
    tags: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    agent: {
      type: 'object',
      additionalProperties: true,
      properties: {
        build: {
          type: 'object',
          additionalProperties: true,
          properties: {
            original: {
              type: 'string',
            },
          },
        },
        ephemeral_id: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        version: {
          type: 'string',
        },
      },
    },
    client: {
      type: 'object',
      additionalProperties: true,
      properties: {
        address: {
          type: 'string',
        },
        as: {
          type: 'object',
          additionalProperties: true,
          properties: {
            number: {
              type: 'integer',
            },
            organization: {
              type: 'object',
              additionalProperties: true,
              properties: {
                name: {
                  type: 'string',
                },
              },
            },
          },
        },
        bytes: {
          type: 'integer',
        },
        domain: {
          type: 'string',
        },
        geo: {
          type: 'object',
          additionalProperties: true,
          properties: {
            city_name: {
              type: 'string',
            },
            continent_code: {
              type: 'string',
            },
            continent_name: {
              type: 'string',
            },
            country_iso_code: {
              type: 'string',
            },
            country_name: {
              type: 'string',
            },
            location: {
              type: 'object',
              additionalProperties: true,
              properties: {
                lon: {
                  type: 'number',
                },
                lat: {
                  type: 'number',
                },
              },
            },
            name: {
              type: 'string',
            },
            postal_code: {
              type: 'string',
            },
            region_iso_code: {
              type: 'string',
            },
            region_name: {
              type: 'string',
            },
            timezone: {
              type: 'string',
            },
          },
        },
        ip: {
          type: 'string',
        },
        mac: {
          type: 'string',
        },
        nat: {
          type: 'object',
          additionalProperties: true,
          properties: {
            ip: {
              type: 'string',
            },
            port: {
              type: 'integer',
            },
          },
        },
        packets: {
          type: 'integer',
        },
        port: {
          type: 'integer',
        },
        registered_domain: {
          type: 'string',
        },
        subdomain: {
          type: 'string',
        },
        top_level_domain: {
          type: 'string',
        },
        user: {
          type: 'object',
          additionalProperties: true,
          properties: {
            domain: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            full_name: {
              type: 'string',
            },
            group: {
              type: 'object',
              additionalProperties: true,
              properties: {
                domain: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            hash: {
              type: 'string',
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            roles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    cloud: {
      type: 'object',
      additionalProperties: true,
      properties: {
        account: {
          type: 'object',
          additionalProperties: true,
          properties: {
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
          },
        },
        availability_zone: {
          type: 'string',
        },
        instance: {
          type: 'object',
          additionalProperties: true,
          properties: {
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
          },
        },
        machine: {
          type: 'object',
          additionalProperties: true,
          properties: {
            type: {
              type: 'string',
            },
          },
        },
        project: {
          type: 'object',
          additionalProperties: true,
          properties: {
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
          },
        },
        provider: {
          type: 'string',
        },
        region: {
          type: 'string',
        },
        service: {
          type: 'object',
          additionalProperties: true,
          properties: {
            name: {
              type: 'string',
            },
          },
        },
      },
    },
    container: {
      type: 'object',
      additionalProperties: true,
      properties: {
        id: {
          type: 'string',
        },
        image: {
          type: 'object',
          additionalProperties: true,
          properties: {
            name: {
              type: 'string',
            },
            tag: {
              type: 'string',
            },
          },
        },
        labels: {
          type: 'object',
          additionalProperties: true,
        },
        name: {
          type: 'string',
        },
        runtime: {
          type: 'string',
        },
      },
    },
    data_stream: {
      type: 'object',
      additionalProperties: true,
      properties: {
        dataset: {
          type: 'string',
        },
        namespace: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
      },
    },
    destination: {
      type: 'object',
      additionalProperties: true,
      properties: {
        address: {
          type: 'string',
        },
        as: {
          type: 'object',
          additionalProperties: true,
          properties: {
            number: {
              type: 'integer',
            },
            organization: {
              type: 'object',
              additionalProperties: true,
              properties: {
                name: {
                  type: 'string',
                },
              },
            },
          },
        },
        bytes: {
          type: 'integer',
        },
        domain: {
          type: 'string',
        },
        geo: {
          type: 'object',
          additionalProperties: true,
          properties: {
            city_name: {
              type: 'string',
            },
            continent_code: {
              type: 'string',
            },
            continent_name: {
              type: 'string',
            },
            country_iso_code: {
              type: 'string',
            },
            country_name: {
              type: 'string',
            },
            location: {
              type: 'object',
              additionalProperties: true,
              properties: {
                lon: {
                  type: 'number',
                },
                lat: {
                  type: 'number',
                },
              },
            },
            name: {
              type: 'string',
            },
            postal_code: {
              type: 'string',
            },
            region_iso_code: {
              type: 'string',
            },
            region_name: {
              type: 'string',
            },
            timezone: {
              type: 'string',
            },
          },
        },
        ip: {
          type: 'string',
        },
        mac: {
          type: 'string',
        },
        nat: {
          type: 'object',
          additionalProperties: true,
          properties: {
            ip: {
              type: 'string',
            },
            port: {
              type: 'integer',
            },
          },
        },
        packets: {
          type: 'integer',
        },
        port: {
          type: 'integer',
        },
        registered_domain: {
          type: 'string',
        },
        subdomain: {
          type: 'string',
        },
        top_level_domain: {
          type: 'string',
        },
        user: {
          type: 'object',
          additionalProperties: true,
          properties: {
            domain: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            full_name: {
              type: 'string',
            },
            group: {
              type: 'object',
              additionalProperties: true,
              properties: {
                domain: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            hash: {
              type: 'string',
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            roles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    dll: {
      type: 'object',
      additionalProperties: true,
      properties: {
        code_signature: {
          type: 'object',
          additionalProperties: true,
          properties: {
            digest_algorithm: {
              type: 'string',
            },
            exists: {
              type: 'boolean',
            },
            signing_id: {
              type: 'string',
            },
            status: {
              type: 'string',
            },
            subject_name: {
              type: 'string',
            },
            team_id: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
            },
            trusted: {
              type: 'boolean',
            },
            valid: {
              type: 'boolean',
            },
          },
        },
        hash: {
          type: 'object',
          additionalProperties: true,
          properties: {
            md5: {
              type: 'string',
            },
            sha1: {
              type: 'string',
            },
            sha256: {
              type: 'string',
            },
            sha512: {
              type: 'string',
            },
            ssdeep: {
              type: 'string',
            },
          },
        },
        name: {
          type: 'string',
        },
        path: {
          type: 'string',
        },
        pe: {
          type: 'object',
          additionalProperties: true,
          properties: {
            architecture: {
              type: 'string',
            },
            company: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            file_version: {
              type: 'string',
            },
            imphash: {
              type: 'string',
            },
            original_file_name: {
              type: 'string',
            },
            product: {
              type: 'string',
            },
          },
        },
      },
    },
    dns: {
      type: 'object',
      additionalProperties: true,
      properties: {
        answers: {
          type: 'object',
          additionalProperties: true,
          properties: {
            class: {
              type: 'string',
            },
            data: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            ttl: {
              type: 'integer',
            },
            type: {
              type: 'string',
            },
          },
        },
        header_flags: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        id: {
          type: 'string',
        },
        op_code: {
          type: 'string',
        },
        question: {
          type: 'object',
          additionalProperties: true,
          properties: {
            class: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            registered_domain: {
              type: 'string',
            },
            subdomain: {
              type: 'string',
            },
            top_level_domain: {
              type: 'string',
            },
            type: {
              type: 'string',
            },
          },
        },
        resolved_ip: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        response_code: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
      },
    },
    ecs: {
      type: 'object',
      additionalProperties: true,
      properties: {
        version: {
          type: 'string',
        },
      },
    },
    error: {
      type: 'object',
      additionalProperties: true,
      properties: {
        code: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
        stack_trace: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
      },
    },
    event: {
      type: 'object',
      additionalProperties: true,
      properties: {
        action: {
          type: 'string',
        },
        agent_id_status: {
          type: 'string',
        },
        category: {
          type: 'string',
        },
        code: {
          type: 'string',
        },
        created: {
          type: 'string',
        },
        dataset: {
          type: 'string',
        },
        duration: {
          type: 'integer',
        },
        end: {
          type: 'string',
        },
        hash: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        ingested: {
          type: 'string',
        },
        kind: {
          type: 'string',
        },
        module: {
          type: 'string',
        },
        original: {
          type: 'string',
        },
        outcome: {
          type: 'string',
        },
        provider: {
          type: 'string',
        },
        reason: {
          type: 'string',
        },
        reference: {
          type: 'string',
        },
        risk_score: {
          type: 'integer',
        },
        risk_score_norm: {
          type: 'integer',
        },
        sequence: {
          type: 'integer',
        },
        severity: {
          type: 'integer',
        },
        start: {
          type: 'string',
        },
        timezone: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        url: {
          type: 'string',
        },
      },
    },
    file: {
      type: 'object',
      additionalProperties: true,
      properties: {
        accessed: {
          type: 'string',
        },
        attributes: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        code_signature: {
          type: 'object',
          additionalProperties: true,
          properties: {
            digest_algorithm: {
              type: 'string',
            },
            exists: {
              type: 'boolean',
            },
            signing_id: {
              type: 'string',
            },
            status: {
              type: 'string',
            },
            subject_name: {
              type: 'string',
            },
            team_id: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
            },
            trusted: {
              type: 'boolean',
            },
            valid: {
              type: 'boolean',
            },
          },
        },
        created: {
          type: 'string',
        },
        ctime: {
          type: 'string',
        },
        device: {
          type: 'string',
        },
        directory: {
          type: 'string',
        },
        drive_letter: {
          type: 'string',
        },
        elf: {
          type: 'object',
          additionalProperties: true,
          properties: {
            architecture: {
              type: 'string',
            },
            byte_order: {
              type: 'string',
            },
            cpu_type: {
              type: 'string',
            },
            creation_date: {
              type: 'string',
            },
            exports: {
              type: 'string',
            },
            header: {
              type: 'object',
              additionalProperties: true,
              properties: {
                abi_version: {
                  type: 'string',
                },
                class: {
                  type: 'string',
                },
                data: {
                  type: 'string',
                },
                entrypoint: {
                  type: 'integer',
                },
                object_version: {
                  type: 'string',
                },
                os_abi: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                },
                version: {
                  type: 'string',
                },
              },
            },
            imports: {
              type: 'string',
            },
            sections: {
              type: 'object',
              additionalProperties: true,
              properties: {
                chi2: {
                  type: 'integer',
                },
                entropy: {
                  type: 'integer',
                },
                flags: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                physical_offset: {
                  type: 'string',
                },
                physical_size: {
                  type: 'integer',
                },
                type: {
                  type: 'string',
                },
                virtual_address: {
                  type: 'integer',
                },
                virtual_size: {
                  type: 'integer',
                },
              },
            },
            segments: {
              type: 'object',
              additionalProperties: true,
              properties: {
                sections: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                },
              },
            },
            shared_libraries: {
              type: 'string',
            },
            telfhash: {
              type: 'string',
            },
          },
        },
        extension: {
          type: 'string',
        },
        fork_name: {
          type: 'string',
        },
        gid: {
          type: 'string',
        },
        group: {
          type: 'string',
        },
        hash: {
          type: 'object',
          additionalProperties: true,
          properties: {
            md5: {
              type: 'string',
            },
            sha1: {
              type: 'string',
            },
            sha256: {
              type: 'string',
            },
            sha512: {
              type: 'string',
            },
            ssdeep: {
              type: 'string',
            },
          },
        },
        inode: {
          type: 'string',
        },
        mime_type: {
          type: 'string',
        },
        mode: {
          type: 'string',
        },
        mtime: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        owner: {
          type: 'string',
        },
        path: {
          type: 'string',
        },
        pe: {
          type: 'object',
          additionalProperties: true,
          properties: {
            architecture: {
              type: 'string',
            },
            company: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            file_version: {
              type: 'string',
            },
            imphash: {
              type: 'string',
            },
            original_file_name: {
              type: 'string',
            },
            product: {
              type: 'string',
            },
          },
        },
        size: {
          type: 'integer',
        },
        target_path: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        uid: {
          type: 'string',
        },
        x509: {
          type: 'object',
          additionalProperties: true,
          properties: {
            alternative_names: {
              type: 'string',
            },
            issuer: {
              type: 'object',
              additionalProperties: true,
              properties: {
                common_name: {
                  type: 'string',
                },
                country: {
                  type: 'string',
                },
                distinguished_name: {
                  type: 'string',
                },
                locality: {
                  type: 'string',
                },
                organization: {
                  type: 'string',
                },
                organizational_unit: {
                  type: 'string',
                },
                state_or_province: {
                  type: 'string',
                },
              },
            },
            not_after: {
              type: 'string',
            },
            not_before: {
              type: 'string',
            },
            public_key_algorithm: {
              type: 'string',
            },
            public_key_curve: {
              type: 'string',
            },
            public_key_exponent: {
              type: 'integer',
            },
            public_key_size: {
              type: 'integer',
            },
            serial_number: {
              type: 'string',
            },
            signature_algorithm: {
              type: 'string',
            },
            subject: {
              type: 'object',
              additionalProperties: true,
              properties: {
                common_name: {
                  type: 'string',
                },
                country: {
                  type: 'string',
                },
                distinguished_name: {
                  type: 'string',
                },
                locality: {
                  type: 'string',
                },
                organization: {
                  type: 'string',
                },
                organizational_unit: {
                  type: 'string',
                },
                state_or_province: {
                  type: 'string',
                },
              },
            },
            version_number: {
              type: 'string',
            },
          },
        },
      },
    },
    group: {
      type: 'object',
      additionalProperties: true,
      properties: {
        domain: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
      },
    },
    host: {
      type: 'object',
      additionalProperties: true,
      properties: {
        architecture: {
          type: 'string',
        },
        cpu: {
          type: 'object',
          additionalProperties: true,
          properties: {
            usage: {
              type: 'integer',
            },
          },
        },
        disk: {
          type: 'object',
          additionalProperties: true,
          properties: {
            read: {
              type: 'object',
              additionalProperties: true,
              properties: {
                bytes: {
                  type: 'integer',
                },
              },
            },
            write: {
              type: 'object',
              additionalProperties: true,
              properties: {
                bytes: {
                  type: 'integer',
                },
              },
            },
          },
        },
        domain: {
          type: 'string',
        },
        geo: {
          type: 'object',
          additionalProperties: true,
          properties: {
            city_name: {
              type: 'string',
            },
            continent_code: {
              type: 'string',
            },
            continent_name: {
              type: 'string',
            },
            country_iso_code: {
              type: 'string',
            },
            country_name: {
              type: 'string',
            },
            location: {
              type: 'object',
              additionalProperties: true,
              properties: {
                lon: {
                  type: 'number',
                },
                lat: {
                  type: 'number',
                },
              },
            },
            name: {
              type: 'string',
            },
            postal_code: {
              type: 'string',
            },
            region_iso_code: {
              type: 'string',
            },
            region_name: {
              type: 'string',
            },
            timezone: {
              type: 'string',
            },
          },
        },
        hostname: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        ip: {
          type: 'string',
        },
        mac: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        name: {
          type: 'string',
        },
        network: {
          type: 'object',
          additionalProperties: true,
          properties: {
            egress: {
              type: 'object',
              additionalProperties: true,
              properties: {
                bytes: {
                  type: 'integer',
                },
                packets: {
                  type: 'integer',
                },
              },
            },
            ingress: {
              type: 'object',
              additionalProperties: true,
              properties: {
                bytes: {
                  type: 'integer',
                },
                packets: {
                  type: 'integer',
                },
              },
            },
          },
        },
        os: {
          type: 'object',
          additionalProperties: true,
          properties: {
            family: {
              type: 'string',
            },
            full: {
              type: 'string',
            },
            kernel: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            platform: {
              type: 'string',
            },
            type: {
              type: 'string',
            },
            version: {
              type: 'string',
            },
          },
        },
        type: {
          type: 'string',
        },
        uptime: {
          type: 'integer',
        },
        user: {
          type: 'object',
          additionalProperties: true,
          properties: {
            domain: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            full_name: {
              type: 'string',
            },
            group: {
              type: 'object',
              additionalProperties: true,
              properties: {
                domain: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            hash: {
              type: 'string',
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            roles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    http: {
      type: 'object',
      additionalProperties: true,
      properties: {
        request: {
          type: 'object',
          additionalProperties: true,
          properties: {
            body: {
              type: 'object',
              additionalProperties: true,
              properties: {
                bytes: {
                  type: 'integer',
                },
                content: {
                  anyOf,
                },
              },
            },
            bytes: {
              type: 'integer',
            },
            id: {
              type: 'string',
            },
            method: {
              type: 'string',
            },
            mime_type: {
              type: 'string',
            },
            referrer: {
              type: 'string',
            },
          },
        },
        response: {
          type: 'object',
          additionalProperties: true,
          properties: {
            body: {
              type: 'object',
              additionalProperties: true,
              properties: {
                bytes: {
                  type: 'integer',
                },
                content: {
                  anyOf,
                },
              },
            },
            bytes: {
              type: 'integer',
            },
            mime_type: {
              type: 'string',
            },
            status_code: {
              type: 'integer',
            },
          },
        },
        version: {
          type: 'string',
        },
      },
    },
    log: {
      type: 'object',
      additionalProperties: true,
      properties: {
        file: {
          type: 'object',
          additionalProperties: true,
          properties: {
            path: {
              type: 'string',
            },
          },
        },
        level: {
          type: 'string',
        },
        logger: {
          type: 'string',
        },
        origin: {
          type: 'object',
          additionalProperties: true,
          properties: {
            file: {
              type: 'object',
              additionalProperties: true,
              properties: {
                line: {
                  type: 'integer',
                },
                name: {
                  type: 'string',
                },
              },
            },
            function: {
              type: 'string',
            },
          },
        },
        original: {
          type: 'string',
        },
        syslog: {
          type: 'object',
          additionalProperties: true,
          properties: {
            facility: {
              type: 'object',
              additionalProperties: true,
              properties: {
                code: {
                  type: 'integer',
                },
                name: {
                  type: 'string',
                },
              },
            },
            priority: {
              type: 'integer',
            },
            severity: {
              type: 'object',
              additionalProperties: true,
              properties: {
                code: {
                  type: 'integer',
                },
                name: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
    network: {
      type: 'object',
      additionalProperties: true,
      properties: {
        application: {
          type: 'string',
        },
        bytes: {
          type: 'integer',
        },
        community_id: {
          type: 'string',
        },
        direction: {
          type: 'string',
        },
        forwarded_ip: {
          type: 'string',
        },
        iana_number: {
          type: 'string',
        },
        inner: {
          type: 'object',
          additionalProperties: true,
          properties: {
            vlan: {
              type: 'object',
              additionalProperties: true,
              properties: {
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
          },
        },
        name: {
          type: 'string',
        },
        packets: {
          type: 'integer',
        },
        protocol: {
          type: 'string',
        },
        transport: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        vlan: {
          type: 'object',
          additionalProperties: true,
          properties: {
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
          },
        },
      },
    },
    observer: {
      type: 'object',
      additionalProperties: true,
      properties: {
        egress: {
          type: 'object',
          additionalProperties: true,
          properties: {
            interface: {
              type: 'object',
              additionalProperties: true,
              properties: {
                alias: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            vlan: {
              type: 'object',
              additionalProperties: true,
              properties: {
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            zone: {
              type: 'string',
            },
          },
        },
        geo: {
          type: 'object',
          additionalProperties: true,
          properties: {
            city_name: {
              type: 'string',
            },
            continent_code: {
              type: 'string',
            },
            continent_name: {
              type: 'string',
            },
            country_iso_code: {
              type: 'string',
            },
            country_name: {
              type: 'string',
            },
            location: {
              type: 'object',
              additionalProperties: true,
              properties: {
                lon: {
                  type: 'number',
                },
                lat: {
                  type: 'number',
                },
              },
            },
            name: {
              type: 'string',
            },
            postal_code: {
              type: 'string',
            },
            region_iso_code: {
              type: 'string',
            },
            region_name: {
              type: 'string',
            },
            timezone: {
              type: 'string',
            },
          },
        },
        hostname: {
          type: 'string',
        },
        ingress: {
          type: 'object',
          additionalProperties: true,
          properties: {
            interface: {
              type: 'object',
              additionalProperties: true,
              properties: {
                alias: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            vlan: {
              type: 'object',
              additionalProperties: true,
              properties: {
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            zone: {
              type: 'string',
            },
          },
        },
        ip: {
          type: 'string',
        },
        mac: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        name: {
          type: 'string',
        },
        os: {
          type: 'object',
          additionalProperties: true,
          properties: {
            family: {
              type: 'string',
            },
            full: {
              type: 'string',
            },
            kernel: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            platform: {
              type: 'string',
            },
            type: {
              type: 'string',
            },
            version: {
              type: 'string',
            },
          },
        },
        product: {
          type: 'string',
        },
        serial_number: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        vendor: {
          type: 'string',
        },
        version: {
          type: 'string',
        },
      },
    },
    orchestrator: {
      type: 'object',
      additionalProperties: true,
      properties: {
        api_version: {
          type: 'string',
        },
        cluster: {
          type: 'object',
          additionalProperties: true,
          properties: {
            name: {
              type: 'string',
            },
            url: {
              type: 'string',
            },
            version: {
              type: 'string',
            },
          },
        },
        namespace: {
          type: 'string',
        },
        organization: {
          type: 'string',
        },
        resource: {
          type: 'object',
          additionalProperties: true,
          properties: {
            name: {
              type: 'string',
            },
            type: {
              type: 'string',
            },
          },
        },
        type: {
          type: 'string',
        },
      },
    },
    organization: {
      type: 'object',
      additionalProperties: true,
      properties: {
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
      },
    },
    package: {
      type: 'object',
      additionalProperties: true,
      properties: {
        architecture: {
          type: 'string',
        },
        build_version: {
          type: 'string',
        },
        checksum: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        install_scope: {
          type: 'string',
        },
        installed: {
          type: 'string',
        },
        license: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        path: {
          type: 'string',
        },
        reference: {
          type: 'string',
        },
        size: {
          type: 'integer',
        },
        type: {
          type: 'string',
        },
        version: {
          type: 'string',
        },
      },
    },
    process: {
      type: 'object',
      additionalProperties: true,
      properties: {
        args: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        args_count: {
          type: 'integer',
        },
        code_signature: {
          type: 'object',
          additionalProperties: true,
          properties: {
            digest_algorithm: {
              type: 'string',
            },
            exists: {
              type: 'boolean',
            },
            signing_id: {
              type: 'string',
            },
            status: {
              type: 'string',
            },
            subject_name: {
              type: 'string',
            },
            team_id: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
            },
            trusted: {
              type: 'boolean',
            },
            valid: {
              type: 'boolean',
            },
          },
        },
        command_line: {
          type: 'string',
        },
        elf: {
          type: 'object',
          additionalProperties: true,
          properties: {
            architecture: {
              type: 'string',
            },
            byte_order: {
              type: 'string',
            },
            cpu_type: {
              type: 'string',
            },
            creation_date: {
              type: 'string',
            },
            exports: {
              type: 'string',
            },
            header: {
              type: 'object',
              additionalProperties: true,
              properties: {
                abi_version: {
                  type: 'string',
                },
                class: {
                  type: 'string',
                },
                data: {
                  type: 'string',
                },
                entrypoint: {
                  type: 'integer',
                },
                object_version: {
                  type: 'string',
                },
                os_abi: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                },
                version: {
                  type: 'string',
                },
              },
            },
            imports: {
              type: 'string',
            },
            sections: {
              type: 'object',
              additionalProperties: true,
              properties: {
                chi2: {
                  type: 'integer',
                },
                entropy: {
                  type: 'integer',
                },
                flags: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                physical_offset: {
                  type: 'string',
                },
                physical_size: {
                  type: 'integer',
                },
                type: {
                  type: 'string',
                },
                virtual_address: {
                  type: 'integer',
                },
                virtual_size: {
                  type: 'integer',
                },
              },
            },
            segments: {
              type: 'object',
              additionalProperties: true,
              properties: {
                sections: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                },
              },
            },
            shared_libraries: {
              type: 'string',
            },
            telfhash: {
              type: 'string',
            },
          },
        },
        end: {
          type: 'string',
        },
        entity_id: {
          type: 'string',
        },
        executable: {
          type: 'string',
        },
        exit_code: {
          type: 'integer',
        },
        hash: {
          type: 'object',
          additionalProperties: true,
          properties: {
            md5: {
              type: 'string',
            },
            sha1: {
              type: 'string',
            },
            sha256: {
              type: 'string',
            },
            sha512: {
              type: 'string',
            },
            ssdeep: {
              type: 'string',
            },
          },
        },
        name: {
          type: 'string',
        },
        parent: {
          type: 'object',
          additionalProperties: true,
          properties: {
            args: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            args_count: {
              type: 'integer',
            },
            code_signature: {
              type: 'object',
              additionalProperties: true,
              properties: {
                digest_algorithm: {
                  type: 'string',
                },
                exists: {
                  type: 'boolean',
                },
                signing_id: {
                  type: 'string',
                },
                status: {
                  type: 'string',
                },
                subject_name: {
                  type: 'string',
                },
                team_id: {
                  type: 'string',
                },
                timestamp: {
                  type: 'string',
                },
                trusted: {
                  type: 'boolean',
                },
                valid: {
                  type: 'boolean',
                },
              },
            },
            command_line: {
              type: 'string',
            },
            elf: {
              type: 'object',
              additionalProperties: true,
              properties: {
                architecture: {
                  type: 'string',
                },
                byte_order: {
                  type: 'string',
                },
                cpu_type: {
                  type: 'string',
                },
                creation_date: {
                  type: 'string',
                },
                exports: {
                  type: 'string',
                },
                header: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    abi_version: {
                      type: 'string',
                    },
                    class: {
                      type: 'string',
                    },
                    data: {
                      type: 'string',
                    },
                    entrypoint: {
                      type: 'integer',
                    },
                    object_version: {
                      type: 'string',
                    },
                    os_abi: {
                      type: 'string',
                    },
                    type: {
                      type: 'string',
                    },
                    version: {
                      type: 'string',
                    },
                  },
                },
                imports: {
                  type: 'string',
                },
                sections: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    chi2: {
                      type: 'integer',
                    },
                    entropy: {
                      type: 'integer',
                    },
                    flags: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
                    },
                    physical_offset: {
                      type: 'string',
                    },
                    physical_size: {
                      type: 'integer',
                    },
                    type: {
                      type: 'string',
                    },
                    virtual_address: {
                      type: 'integer',
                    },
                    virtual_size: {
                      type: 'integer',
                    },
                  },
                },
                segments: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    sections: {
                      type: 'string',
                    },
                    type: {
                      type: 'string',
                    },
                  },
                },
                shared_libraries: {
                  type: 'string',
                },
                telfhash: {
                  type: 'string',
                },
              },
            },
            end: {
              type: 'string',
            },
            entity_id: {
              type: 'string',
            },
            executable: {
              type: 'string',
            },
            exit_code: {
              type: 'integer',
            },
            hash: {
              type: 'object',
              additionalProperties: true,
              properties: {
                md5: {
                  type: 'string',
                },
                sha1: {
                  type: 'string',
                },
                sha256: {
                  type: 'string',
                },
                sha512: {
                  type: 'string',
                },
                ssdeep: {
                  type: 'string',
                },
              },
            },
            name: {
              type: 'string',
            },
            pe: {
              type: 'object',
              additionalProperties: true,
              properties: {
                architecture: {
                  type: 'string',
                },
                company: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                file_version: {
                  type: 'string',
                },
                imphash: {
                  type: 'string',
                },
                original_file_name: {
                  type: 'string',
                },
                product: {
                  type: 'string',
                },
              },
            },
            pgid: {
              type: 'integer',
            },
            pid: {
              type: 'integer',
            },
            ppid: {
              type: 'integer',
            },
            start: {
              type: 'string',
            },
            thread: {
              type: 'object',
              additionalProperties: true,
              properties: {
                id: {
                  type: 'integer',
                },
                name: {
                  type: 'string',
                },
              },
            },
            title: {
              type: 'string',
            },
            uptime: {
              type: 'integer',
            },
            working_directory: {
              type: 'string',
            },
          },
        },
        pe: {
          type: 'object',
          additionalProperties: true,
          properties: {
            architecture: {
              type: 'string',
            },
            company: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            file_version: {
              type: 'string',
            },
            imphash: {
              type: 'string',
            },
            original_file_name: {
              type: 'string',
            },
            product: {
              type: 'string',
            },
          },
        },
        pgid: {
          type: 'integer',
        },
        pid: {
          type: 'integer',
        },
        ppid: {
          type: 'integer',
        },
        start: {
          type: 'string',
        },
        thread: {
          type: 'object',
          additionalProperties: true,
          properties: {
            id: {
              type: 'integer',
            },
            name: {
              type: 'string',
            },
          },
        },
        title: {
          type: 'string',
        },
        uptime: {
          type: 'integer',
        },
        working_directory: {
          type: 'string',
        },
      },
    },
    registry: {
      type: 'object',
      additionalProperties: true,
      properties: {
        data: {
          type: 'object',
          additionalProperties: true,
          properties: {
            bytes: {
              type: 'string',
            },
            strings: {
              type: 'string',
            },
            type: {
              type: 'string',
            },
          },
        },
        hive: {
          type: 'string',
        },
        key: {
          type: 'string',
        },
        path: {
          type: 'string',
        },
        value: {
          type: 'string',
        },
      },
    },
    related: {
      type: 'object',
      additionalProperties: true,
      properties: {
        hash: {
          type: 'string',
        },
        hosts: {
          type: 'string',
        },
        ip: {
          type: 'string',
        },
        user: {
          type: 'string',
        },
      },
    },
    rule: {
      type: 'object',
      additionalProperties: true,
      properties: {
        author: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        category: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        license: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        reference: {
          type: 'string',
        },
        ruleset: {
          type: 'string',
        },
        uuid: {
          type: 'string',
        },
        version: {
          type: 'string',
        },
      },
    },
    server: {
      type: 'object',
      additionalProperties: true,
      properties: {
        address: {
          type: 'string',
        },
        as: {
          type: 'object',
          additionalProperties: true,
          properties: {
            number: {
              type: 'integer',
            },
            organization: {
              type: 'object',
              additionalProperties: true,
              properties: {
                name: {
                  type: 'string',
                },
              },
            },
          },
        },
        bytes: {
          type: 'integer',
        },
        domain: {
          type: 'string',
        },
        geo: {
          type: 'object',
          additionalProperties: true,
          properties: {
            city_name: {
              type: 'string',
            },
            continent_code: {
              type: 'string',
            },
            continent_name: {
              type: 'string',
            },
            country_iso_code: {
              type: 'string',
            },
            country_name: {
              type: 'string',
            },
            location: {
              type: 'object',
              additionalProperties: true,
              properties: {
                lon: {
                  type: 'number',
                },
                lat: {
                  type: 'number',
                },
              },
            },
            name: {
              type: 'string',
            },
            postal_code: {
              type: 'string',
            },
            region_iso_code: {
              type: 'string',
            },
            region_name: {
              type: 'string',
            },
            timezone: {
              type: 'string',
            },
          },
        },
        ip: {
          type: 'string',
        },
        mac: {
          type: 'string',
        },
        nat: {
          type: 'object',
          additionalProperties: true,
          properties: {
            ip: {
              type: 'string',
            },
            port: {
              type: 'integer',
            },
          },
        },
        packets: {
          type: 'integer',
        },
        port: {
          type: 'integer',
        },
        registered_domain: {
          type: 'string',
        },
        subdomain: {
          type: 'string',
        },
        top_level_domain: {
          type: 'string',
        },
        user: {
          type: 'object',
          additionalProperties: true,
          properties: {
            domain: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            full_name: {
              type: 'string',
            },
            group: {
              type: 'object',
              additionalProperties: true,
              properties: {
                domain: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            hash: {
              type: 'string',
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            roles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    service: {
      type: 'object',
      additionalProperties: true,
      properties: {
        address: {
          type: 'string',
        },
        environment: {
          type: 'string',
        },
        ephemeral_id: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        node: {
          type: 'object',
          additionalProperties: true,
          properties: {
            name: {
              type: 'string',
            },
          },
        },
        state: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        version: {
          type: 'string',
        },
      },
    },
    source: {
      type: 'object',
      additionalProperties: true,
      properties: {
        address: {
          type: 'string',
        },
        as: {
          type: 'object',
          additionalProperties: true,
          properties: {
            number: {
              type: 'integer',
            },
            organization: {
              type: 'object',
              additionalProperties: true,
              properties: {
                name: {
                  type: 'string',
                },
              },
            },
          },
        },
        bytes: {
          type: 'integer',
        },
        domain: {
          type: 'string',
        },
        geo: {
          type: 'object',
          additionalProperties: true,
          properties: {
            city_name: {
              type: 'string',
            },
            continent_code: {
              type: 'string',
            },
            continent_name: {
              type: 'string',
            },
            country_iso_code: {
              type: 'string',
            },
            country_name: {
              type: 'string',
            },
            location: {
              type: 'object',
              additionalProperties: true,
              properties: {
                lon: {
                  type: 'number',
                },
                lat: {
                  type: 'number',
                },
              },
            },
            name: {
              type: 'string',
            },
            postal_code: {
              type: 'string',
            },
            region_iso_code: {
              type: 'string',
            },
            region_name: {
              type: 'string',
            },
            timezone: {
              type: 'string',
            },
          },
        },
        ip: {
          type: 'string',
        },
        mac: {
          type: 'string',
        },
        nat: {
          type: 'object',
          additionalProperties: true,
          properties: {
            ip: {
              type: 'string',
            },
            port: {
              type: 'integer',
            },
          },
        },
        packets: {
          type: 'integer',
        },
        port: {
          type: 'integer',
        },
        registered_domain: {
          type: 'string',
        },
        subdomain: {
          type: 'string',
        },
        top_level_domain: {
          type: 'string',
        },
        user: {
          type: 'object',
          additionalProperties: true,
          properties: {
            domain: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            full_name: {
              type: 'string',
            },
            group: {
              type: 'object',
              additionalProperties: true,
              properties: {
                domain: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            hash: {
              type: 'string',
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            roles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    span: {
      type: 'object',
      additionalProperties: true,
      properties: {
        id: {
          type: 'string',
        },
      },
    },
    threat: {
      type: 'object',
      additionalProperties: true,
      properties: {
        enrichments: {
          type: 'object',
          additionalProperties: true,
          properties: {
            indicator: {
              type: 'object',
              additionalProperties: true,
              properties: {
                as: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    number: {
                      type: 'integer',
                    },
                    organization: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        name: {
                          type: 'string',
                        },
                      },
                    },
                  },
                },
                confidence: {
                  type: 'string',
                },
                description: {
                  type: 'string',
                },
                email: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    address: {
                      type: 'string',
                    },
                  },
                },
                file: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    accessed: {
                      type: 'string',
                    },
                    attributes: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                    code_signature: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        digest_algorithm: {
                          type: 'string',
                        },
                        exists: {
                          type: 'boolean',
                        },
                        signing_id: {
                          type: 'string',
                        },
                        status: {
                          type: 'string',
                        },
                        subject_name: {
                          type: 'string',
                        },
                        team_id: {
                          type: 'string',
                        },
                        timestamp: {
                          type: 'string',
                        },
                        trusted: {
                          type: 'boolean',
                        },
                        valid: {
                          type: 'boolean',
                        },
                      },
                    },
                    created: {
                      type: 'string',
                    },
                    ctime: {
                      type: 'string',
                    },
                    device: {
                      type: 'string',
                    },
                    directory: {
                      type: 'string',
                    },
                    drive_letter: {
                      type: 'string',
                    },
                    elf: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        architecture: {
                          type: 'string',
                        },
                        byte_order: {
                          type: 'string',
                        },
                        cpu_type: {
                          type: 'string',
                        },
                        creation_date: {
                          type: 'string',
                        },
                        exports: {
                          type: 'string',
                        },
                        header: {
                          type: 'object',
                          additionalProperties: true,
                          properties: {
                            abi_version: {
                              type: 'string',
                            },
                            class: {
                              type: 'string',
                            },
                            data: {
                              type: 'string',
                            },
                            entrypoint: {
                              type: 'integer',
                            },
                            object_version: {
                              type: 'string',
                            },
                            os_abi: {
                              type: 'string',
                            },
                            type: {
                              type: 'string',
                            },
                            version: {
                              type: 'string',
                            },
                          },
                        },
                        imports: {
                          type: 'string',
                        },
                        sections: {
                          type: 'object',
                          additionalProperties: true,
                          properties: {
                            chi2: {
                              type: 'integer',
                            },
                            entropy: {
                              type: 'integer',
                            },
                            flags: {
                              type: 'string',
                            },
                            name: {
                              type: 'string',
                            },
                            physical_offset: {
                              type: 'string',
                            },
                            physical_size: {
                              type: 'integer',
                            },
                            type: {
                              type: 'string',
                            },
                            virtual_address: {
                              type: 'integer',
                            },
                            virtual_size: {
                              type: 'integer',
                            },
                          },
                        },
                        segments: {
                          type: 'object',
                          additionalProperties: true,
                          properties: {
                            sections: {
                              type: 'string',
                            },
                            type: {
                              type: 'string',
                            },
                          },
                        },
                        shared_libraries: {
                          type: 'string',
                        },
                        telfhash: {
                          type: 'string',
                        },
                      },
                    },
                    extension: {
                      type: 'string',
                    },
                    fork_name: {
                      type: 'string',
                    },
                    gid: {
                      type: 'string',
                    },
                    group: {
                      type: 'string',
                    },
                    hash: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        md5: {
                          type: 'string',
                        },
                        sha1: {
                          type: 'string',
                        },
                        sha256: {
                          type: 'string',
                        },
                        sha512: {
                          type: 'string',
                        },
                        ssdeep: {
                          type: 'string',
                        },
                      },
                    },
                    inode: {
                      type: 'string',
                    },
                    mime_type: {
                      type: 'string',
                    },
                    mode: {
                      type: 'string',
                    },
                    mtime: {
                      type: 'string',
                    },
                    name: {
                      type: 'string',
                    },
                    owner: {
                      type: 'string',
                    },
                    path: {
                      type: 'string',
                    },
                    pe: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        architecture: {
                          type: 'string',
                        },
                        company: {
                          type: 'string',
                        },
                        description: {
                          type: 'string',
                        },
                        file_version: {
                          type: 'string',
                        },
                        imphash: {
                          type: 'string',
                        },
                        original_file_name: {
                          type: 'string',
                        },
                        product: {
                          type: 'string',
                        },
                      },
                    },
                    size: {
                      type: 'integer',
                    },
                    target_path: {
                      type: 'string',
                    },
                    type: {
                      type: 'string',
                    },
                    uid: {
                      type: 'string',
                    },
                    x509: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        alternative_names: {
                          type: 'string',
                        },
                        issuer: {
                          type: 'object',
                          additionalProperties: true,
                          properties: {
                            common_name: {
                              type: 'string',
                            },
                            country: {
                              type: 'string',
                            },
                            distinguished_name: {
                              type: 'string',
                            },
                            locality: {
                              type: 'string',
                            },
                            organization: {
                              type: 'string',
                            },
                            organizational_unit: {
                              type: 'string',
                            },
                            state_or_province: {
                              type: 'string',
                            },
                          },
                        },
                        not_after: {
                          type: 'string',
                        },
                        not_before: {
                          type: 'string',
                        },
                        public_key_algorithm: {
                          type: 'string',
                        },
                        public_key_curve: {
                          type: 'string',
                        },
                        public_key_exponent: {
                          type: 'integer',
                        },
                        public_key_size: {
                          type: 'integer',
                        },
                        serial_number: {
                          type: 'string',
                        },
                        signature_algorithm: {
                          type: 'string',
                        },
                        subject: {
                          type: 'object',
                          additionalProperties: true,
                          properties: {
                            common_name: {
                              type: 'string',
                            },
                            country: {
                              type: 'string',
                            },
                            distinguished_name: {
                              type: 'string',
                            },
                            locality: {
                              type: 'string',
                            },
                            organization: {
                              type: 'string',
                            },
                            organizational_unit: {
                              type: 'string',
                            },
                            state_or_province: {
                              type: 'string',
                            },
                          },
                        },
                        version_number: {
                          type: 'string',
                        },
                      },
                    },
                  },
                },
                first_seen: {
                  type: 'string',
                },
                geo: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    city_name: {
                      type: 'string',
                    },
                    continent_code: {
                      type: 'string',
                    },
                    continent_name: {
                      type: 'string',
                    },
                    country_iso_code: {
                      type: 'string',
                    },
                    country_name: {
                      type: 'string',
                    },
                    location: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        lon: {
                          type: 'number',
                        },
                        lat: {
                          type: 'number',
                        },
                      },
                    },
                    name: {
                      type: 'string',
                    },
                    postal_code: {
                      type: 'string',
                    },
                    region_iso_code: {
                      type: 'string',
                    },
                    region_name: {
                      type: 'string',
                    },
                    timezone: {
                      type: 'string',
                    },
                  },
                },
                ip: {
                  type: 'string',
                },
                last_seen: {
                  type: 'string',
                },
                marking: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    tlp: {
                      type: 'string',
                    },
                  },
                },
                modified_at: {
                  type: 'string',
                },
                port: {
                  type: 'integer',
                },
                provider: {
                  type: 'string',
                },
                reference: {
                  type: 'string',
                },
                registry: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    data: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        bytes: {
                          type: 'string',
                        },
                        strings: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                        },
                      },
                    },
                    hive: {
                      type: 'string',
                    },
                    key: {
                      type: 'string',
                    },
                    path: {
                      type: 'string',
                    },
                    value: {
                      type: 'string',
                    },
                  },
                },
                scanner_stats: {
                  type: 'integer',
                },
                sightings: {
                  type: 'integer',
                },
                type: {
                  type: 'string',
                },
                url: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    domain: {
                      type: 'string',
                    },
                    extension: {
                      type: 'string',
                    },
                    fragment: {
                      type: 'string',
                    },
                    full: {
                      type: 'string',
                    },
                    original: {
                      type: 'string',
                    },
                    password: {
                      type: 'string',
                    },
                    path: {
                      type: 'string',
                    },
                    port: {
                      type: 'integer',
                    },
                    query: {
                      type: 'string',
                    },
                    registered_domain: {
                      type: 'string',
                    },
                    scheme: {
                      type: 'string',
                    },
                    subdomain: {
                      type: 'string',
                    },
                    top_level_domain: {
                      type: 'string',
                    },
                    username: {
                      type: 'string',
                    },
                  },
                },
                x509: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    alternative_names: {
                      type: 'string',
                    },
                    issuer: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        common_name: {
                          type: 'string',
                        },
                        country: {
                          type: 'string',
                        },
                        distinguished_name: {
                          type: 'string',
                        },
                        locality: {
                          type: 'string',
                        },
                        organization: {
                          type: 'string',
                        },
                        organizational_unit: {
                          type: 'string',
                        },
                        state_or_province: {
                          type: 'string',
                        },
                      },
                    },
                    not_after: {
                      type: 'string',
                    },
                    not_before: {
                      type: 'string',
                    },
                    public_key_algorithm: {
                      type: 'string',
                    },
                    public_key_curve: {
                      type: 'string',
                    },
                    public_key_exponent: {
                      type: 'integer',
                    },
                    public_key_size: {
                      type: 'integer',
                    },
                    serial_number: {
                      type: 'string',
                    },
                    signature_algorithm: {
                      type: 'string',
                    },
                    subject: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        common_name: {
                          type: 'string',
                        },
                        country: {
                          type: 'string',
                        },
                        distinguished_name: {
                          type: 'string',
                        },
                        locality: {
                          type: 'string',
                        },
                        organization: {
                          type: 'string',
                        },
                        organizational_unit: {
                          type: 'string',
                        },
                        state_or_province: {
                          type: 'string',
                        },
                      },
                    },
                    version_number: {
                      type: 'string',
                    },
                  },
                },
              },
            },
            matched: {
              type: 'object',
              additionalProperties: true,
              properties: {
                atomic: {
                  type: 'string',
                },
                field: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                index: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                },
              },
            },
          },
        },
        framework: {
          type: 'string',
        },
        group: {
          type: 'object',
          additionalProperties: true,
          properties: {
            alias: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            reference: {
              type: 'string',
            },
          },
        },
        indicator: {
          type: 'object',
          additionalProperties: true,
          properties: {
            as: {
              type: 'object',
              additionalProperties: true,
              properties: {
                number: {
                  type: 'integer',
                },
                organization: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    name: {
                      type: 'string',
                    },
                  },
                },
              },
            },
            confidence: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            email: {
              type: 'object',
              additionalProperties: true,
              properties: {
                address: {
                  type: 'string',
                },
              },
            },
            file: {
              type: 'object',
              additionalProperties: true,
              properties: {
                accessed: {
                  type: 'string',
                },
                attributes: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                code_signature: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    digest_algorithm: {
                      type: 'string',
                    },
                    exists: {
                      type: 'boolean',
                    },
                    signing_id: {
                      type: 'string',
                    },
                    status: {
                      type: 'string',
                    },
                    subject_name: {
                      type: 'string',
                    },
                    team_id: {
                      type: 'string',
                    },
                    timestamp: {
                      type: 'string',
                    },
                    trusted: {
                      type: 'boolean',
                    },
                    valid: {
                      type: 'boolean',
                    },
                  },
                },
                created: {
                  type: 'string',
                },
                ctime: {
                  type: 'string',
                },
                device: {
                  type: 'string',
                },
                directory: {
                  type: 'string',
                },
                drive_letter: {
                  type: 'string',
                },
                elf: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    architecture: {
                      type: 'string',
                    },
                    byte_order: {
                      type: 'string',
                    },
                    cpu_type: {
                      type: 'string',
                    },
                    creation_date: {
                      type: 'string',
                    },
                    exports: {
                      type: 'string',
                    },
                    header: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        abi_version: {
                          type: 'string',
                        },
                        class: {
                          type: 'string',
                        },
                        data: {
                          type: 'string',
                        },
                        entrypoint: {
                          type: 'integer',
                        },
                        object_version: {
                          type: 'string',
                        },
                        os_abi: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                        },
                        version: {
                          type: 'string',
                        },
                      },
                    },
                    imports: {
                      type: 'string',
                    },
                    sections: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        chi2: {
                          type: 'integer',
                        },
                        entropy: {
                          type: 'integer',
                        },
                        flags: {
                          type: 'string',
                        },
                        name: {
                          type: 'string',
                        },
                        physical_offset: {
                          type: 'string',
                        },
                        physical_size: {
                          type: 'integer',
                        },
                        type: {
                          type: 'string',
                        },
                        virtual_address: {
                          type: 'integer',
                        },
                        virtual_size: {
                          type: 'integer',
                        },
                      },
                    },
                    segments: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        sections: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                        },
                      },
                    },
                    shared_libraries: {
                      type: 'string',
                    },
                    telfhash: {
                      type: 'string',
                    },
                  },
                },
                extension: {
                  type: 'string',
                },
                fork_name: {
                  type: 'string',
                },
                gid: {
                  type: 'string',
                },
                group: {
                  type: 'string',
                },
                hash: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    md5: {
                      type: 'string',
                    },
                    sha1: {
                      type: 'string',
                    },
                    sha256: {
                      type: 'string',
                    },
                    sha512: {
                      type: 'string',
                    },
                    ssdeep: {
                      type: 'string',
                    },
                  },
                },
                inode: {
                  type: 'string',
                },
                mime_type: {
                  type: 'string',
                },
                mode: {
                  type: 'string',
                },
                mtime: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                owner: {
                  type: 'string',
                },
                path: {
                  type: 'string',
                },
                pe: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    architecture: {
                      type: 'string',
                    },
                    company: {
                      type: 'string',
                    },
                    description: {
                      type: 'string',
                    },
                    file_version: {
                      type: 'string',
                    },
                    imphash: {
                      type: 'string',
                    },
                    original_file_name: {
                      type: 'string',
                    },
                    product: {
                      type: 'string',
                    },
                  },
                },
                size: {
                  type: 'integer',
                },
                target_path: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                },
                uid: {
                  type: 'string',
                },
                x509: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    alternative_names: {
                      type: 'string',
                    },
                    issuer: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        common_name: {
                          type: 'string',
                        },
                        country: {
                          type: 'string',
                        },
                        distinguished_name: {
                          type: 'string',
                        },
                        locality: {
                          type: 'string',
                        },
                        organization: {
                          type: 'string',
                        },
                        organizational_unit: {
                          type: 'string',
                        },
                        state_or_province: {
                          type: 'string',
                        },
                      },
                    },
                    not_after: {
                      type: 'string',
                    },
                    not_before: {
                      type: 'string',
                    },
                    public_key_algorithm: {
                      type: 'string',
                    },
                    public_key_curve: {
                      type: 'string',
                    },
                    public_key_exponent: {
                      type: 'integer',
                    },
                    public_key_size: {
                      type: 'integer',
                    },
                    serial_number: {
                      type: 'string',
                    },
                    signature_algorithm: {
                      type: 'string',
                    },
                    subject: {
                      type: 'object',
                      additionalProperties: true,
                      properties: {
                        common_name: {
                          type: 'string',
                        },
                        country: {
                          type: 'string',
                        },
                        distinguished_name: {
                          type: 'string',
                        },
                        locality: {
                          type: 'string',
                        },
                        organization: {
                          type: 'string',
                        },
                        organizational_unit: {
                          type: 'string',
                        },
                        state_or_province: {
                          type: 'string',
                        },
                      },
                    },
                    version_number: {
                      type: 'string',
                    },
                  },
                },
              },
            },
            first_seen: {
              type: 'string',
            },
            geo: {
              type: 'object',
              additionalProperties: true,
              properties: {
                city_name: {
                  type: 'string',
                },
                continent_code: {
                  type: 'string',
                },
                continent_name: {
                  type: 'string',
                },
                country_iso_code: {
                  type: 'string',
                },
                country_name: {
                  type: 'string',
                },
                location: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    lon: {
                      type: 'number',
                    },
                    lat: {
                      type: 'number',
                    },
                  },
                },
                name: {
                  type: 'string',
                },
                postal_code: {
                  type: 'string',
                },
                region_iso_code: {
                  type: 'string',
                },
                region_name: {
                  type: 'string',
                },
                timezone: {
                  type: 'string',
                },
              },
            },
            ip: {
              type: 'string',
            },
            last_seen: {
              type: 'string',
            },
            marking: {
              type: 'object',
              additionalProperties: true,
              properties: {
                tlp: {
                  type: 'string',
                },
              },
            },
            modified_at: {
              type: 'string',
            },
            port: {
              type: 'integer',
            },
            provider: {
              type: 'string',
            },
            reference: {
              type: 'string',
            },
            registry: {
              type: 'object',
              additionalProperties: true,
              properties: {
                data: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    bytes: {
                      type: 'string',
                    },
                    strings: {
                      type: 'string',
                    },
                    type: {
                      type: 'string',
                    },
                  },
                },
                hive: {
                  type: 'string',
                },
                key: {
                  type: 'string',
                },
                path: {
                  type: 'string',
                },
                value: {
                  type: 'string',
                },
              },
            },
            scanner_stats: {
              type: 'integer',
            },
            sightings: {
              type: 'integer',
            },
            type: {
              type: 'string',
            },
            url: {
              type: 'object',
              additionalProperties: true,
              properties: {
                domain: {
                  type: 'string',
                },
                extension: {
                  type: 'string',
                },
                fragment: {
                  type: 'string',
                },
                full: {
                  type: 'string',
                },
                original: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
                path: {
                  type: 'string',
                },
                port: {
                  type: 'integer',
                },
                query: {
                  type: 'string',
                },
                registered_domain: {
                  type: 'string',
                },
                scheme: {
                  type: 'string',
                },
                subdomain: {
                  type: 'string',
                },
                top_level_domain: {
                  type: 'string',
                },
                username: {
                  type: 'string',
                },
              },
            },
            x509: {
              type: 'object',
              additionalProperties: true,
              properties: {
                alternative_names: {
                  type: 'string',
                },
                issuer: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    common_name: {
                      type: 'string',
                    },
                    country: {
                      type: 'string',
                    },
                    distinguished_name: {
                      type: 'string',
                    },
                    locality: {
                      type: 'string',
                    },
                    organization: {
                      type: 'string',
                    },
                    organizational_unit: {
                      type: 'string',
                    },
                    state_or_province: {
                      type: 'string',
                    },
                  },
                },
                not_after: {
                  type: 'string',
                },
                not_before: {
                  type: 'string',
                },
                public_key_algorithm: {
                  type: 'string',
                },
                public_key_curve: {
                  type: 'string',
                },
                public_key_exponent: {
                  type: 'integer',
                },
                public_key_size: {
                  type: 'integer',
                },
                serial_number: {
                  type: 'string',
                },
                signature_algorithm: {
                  type: 'string',
                },
                subject: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    common_name: {
                      type: 'string',
                    },
                    country: {
                      type: 'string',
                    },
                    distinguished_name: {
                      type: 'string',
                    },
                    locality: {
                      type: 'string',
                    },
                    organization: {
                      type: 'string',
                    },
                    organizational_unit: {
                      type: 'string',
                    },
                    state_or_province: {
                      type: 'string',
                    },
                  },
                },
                version_number: {
                  type: 'string',
                },
              },
            },
          },
        },
        software: {
          type: 'object',
          additionalProperties: true,
          properties: {
            alias: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            platforms: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            reference: {
              type: 'string',
            },
            type: {
              type: 'string',
            },
          },
        },
        tactic: {
          type: 'object',
          additionalProperties: true,
          properties: {
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            reference: {
              type: 'string',
            },
          },
        },
        technique: {
          type: 'object',
          additionalProperties: true,
          properties: {
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            reference: {
              type: 'string',
            },
            subtechnique: {
              type: 'object',
              additionalProperties: true,
              properties: {
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                reference: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
    tls: {
      type: 'object',
      additionalProperties: true,
      properties: {
        cipher: {
          type: 'string',
        },
        client: {
          type: 'object',
          additionalProperties: true,
          properties: {
            certificate: {
              type: 'string',
            },
            certificate_chain: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            hash: {
              type: 'object',
              additionalProperties: true,
              properties: {
                md5: {
                  type: 'string',
                },
                sha1: {
                  type: 'string',
                },
                sha256: {
                  type: 'string',
                },
              },
            },
            issuer: {
              type: 'string',
            },
            ja3: {
              type: 'string',
            },
            not_after: {
              type: 'string',
            },
            not_before: {
              type: 'string',
            },
            server_name: {
              type: 'string',
            },
            subject: {
              type: 'string',
            },
            supported_ciphers: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            x509: {
              type: 'object',
              additionalProperties: true,
              properties: {
                alternative_names: {
                  type: 'string',
                },
                issuer: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    common_name: {
                      type: 'string',
                    },
                    country: {
                      type: 'string',
                    },
                    distinguished_name: {
                      type: 'string',
                    },
                    locality: {
                      type: 'string',
                    },
                    organization: {
                      type: 'string',
                    },
                    organizational_unit: {
                      type: 'string',
                    },
                    state_or_province: {
                      type: 'string',
                    },
                  },
                },
                not_after: {
                  type: 'string',
                },
                not_before: {
                  type: 'string',
                },
                public_key_algorithm: {
                  type: 'string',
                },
                public_key_curve: {
                  type: 'string',
                },
                public_key_exponent: {
                  type: 'integer',
                },
                public_key_size: {
                  type: 'integer',
                },
                serial_number: {
                  type: 'string',
                },
                signature_algorithm: {
                  type: 'string',
                },
                subject: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    common_name: {
                      type: 'string',
                    },
                    country: {
                      type: 'string',
                    },
                    distinguished_name: {
                      type: 'string',
                    },
                    locality: {
                      type: 'string',
                    },
                    organization: {
                      type: 'string',
                    },
                    organizational_unit: {
                      type: 'string',
                    },
                    state_or_province: {
                      type: 'string',
                    },
                  },
                },
                version_number: {
                  type: 'string',
                },
              },
            },
          },
        },
        curve: {
          type: 'string',
        },
        established: {
          type: 'boolean',
        },
        next_protocol: {
          type: 'string',
        },
        resumed: {
          type: 'boolean',
        },
        server: {
          type: 'object',
          additionalProperties: true,
          properties: {
            certificate: {
              type: 'string',
            },
            certificate_chain: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            hash: {
              type: 'object',
              additionalProperties: true,
              properties: {
                md5: {
                  type: 'string',
                },
                sha1: {
                  type: 'string',
                },
                sha256: {
                  type: 'string',
                },
              },
            },
            issuer: {
              type: 'string',
            },
            ja3s: {
              type: 'string',
            },
            not_after: {
              type: 'string',
            },
            not_before: {
              type: 'string',
            },
            subject: {
              type: 'string',
            },
            x509: {
              type: 'object',
              additionalProperties: true,
              properties: {
                alternative_names: {
                  type: 'string',
                },
                issuer: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    common_name: {
                      type: 'string',
                    },
                    country: {
                      type: 'string',
                    },
                    distinguished_name: {
                      type: 'string',
                    },
                    locality: {
                      type: 'string',
                    },
                    organization: {
                      type: 'string',
                    },
                    organizational_unit: {
                      type: 'string',
                    },
                    state_or_province: {
                      type: 'string',
                    },
                  },
                },
                not_after: {
                  type: 'string',
                },
                not_before: {
                  type: 'string',
                },
                public_key_algorithm: {
                  type: 'string',
                },
                public_key_curve: {
                  type: 'string',
                },
                public_key_exponent: {
                  type: 'integer',
                },
                public_key_size: {
                  type: 'integer',
                },
                serial_number: {
                  type: 'string',
                },
                signature_algorithm: {
                  type: 'string',
                },
                subject: {
                  type: 'object',
                  additionalProperties: true,
                  properties: {
                    common_name: {
                      type: 'string',
                    },
                    country: {
                      type: 'string',
                    },
                    distinguished_name: {
                      type: 'string',
                    },
                    locality: {
                      type: 'string',
                    },
                    organization: {
                      type: 'string',
                    },
                    organizational_unit: {
                      type: 'string',
                    },
                    state_or_province: {
                      type: 'string',
                    },
                  },
                },
                version_number: {
                  type: 'string',
                },
              },
            },
          },
        },
        version: {
          type: 'string',
        },
        version_protocol: {
          type: 'string',
        },
      },
    },
    trace: {
      type: 'object',
      additionalProperties: true,
      properties: {
        id: {
          type: 'string',
        },
      },
    },
    transaction: {
      type: 'object',
      additionalProperties: true,
      properties: {
        id: {
          type: 'string',
        },
      },
    },
    url: {
      type: 'object',
      additionalProperties: true,
      properties: {
        domain: {
          type: 'string',
        },
        extension: {
          type: 'string',
        },
        fragment: {
          type: 'string',
        },
        full: {
          type: 'string',
        },
        original: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
        path: {
          type: 'string',
        },
        port: {
          type: 'integer',
        },
        query: {
          type: 'string',
        },
        registered_domain: {
          type: 'string',
        },
        scheme: {
          type: 'string',
        },
        subdomain: {
          type: 'string',
        },
        top_level_domain: {
          type: 'string',
        },
        username: {
          type: 'string',
        },
      },
    },
    user: {
      type: 'object',
      additionalProperties: true,
      properties: {
        changes: {
          type: 'object',
          additionalProperties: true,
          properties: {
            domain: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            full_name: {
              type: 'string',
            },
            group: {
              type: 'object',
              additionalProperties: true,
              properties: {
                domain: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            hash: {
              type: 'string',
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            roles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
        domain: {
          type: 'string',
        },
        effective: {
          type: 'object',
          additionalProperties: true,
          properties: {
            domain: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            full_name: {
              type: 'string',
            },
            group: {
              type: 'object',
              additionalProperties: true,
              properties: {
                domain: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            hash: {
              type: 'string',
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            roles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
        email: {
          type: 'string',
        },
        full_name: {
          type: 'string',
        },
        group: {
          type: 'object',
          additionalProperties: true,
          properties: {
            domain: {
              type: 'string',
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
          },
        },
        hash: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        roles: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        target: {
          type: 'object',
          additionalProperties: true,
          properties: {
            domain: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            full_name: {
              type: 'string',
            },
            group: {
              type: 'object',
              additionalProperties: true,
              properties: {
                domain: {
                  type: 'string',
                },
                id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
              },
            },
            hash: {
              type: 'string',
            },
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            roles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    user_agent: {
      type: 'object',
      additionalProperties: true,
      properties: {
        device: {
          type: 'object',
          additionalProperties: true,
          properties: {
            name: {
              type: 'string',
            },
          },
        },
        name: {
          type: 'string',
        },
        original: {
          type: 'string',
        },
        os: {
          type: 'object',
          additionalProperties: true,
          properties: {
            family: {
              type: 'string',
            },
            full: {
              type: 'string',
            },
            kernel: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            platform: {
              type: 'string',
            },
            type: {
              type: 'string',
            },
            version: {
              type: 'string',
            },
          },
        },
        version: {
          type: 'string',
        },
      },
    },
    vulnerability: {
      type: 'object',
      additionalProperties: true,
      properties: {
        category: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        classification: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        enumeration: {
          type: 'string',
        },
        id: {
          type: 'string',
        },
        reference: {
          type: 'string',
        },
        report_id: {
          type: 'string',
        },
        scanner: {
          type: 'object',
          additionalProperties: true,
          properties: {
            vendor: {
              type: 'string',
            },
          },
        },
        score: {
          type: 'object',
          additionalProperties: true,
          properties: {
            base: {
              type: 'integer',
            },
            environmental: {
              type: 'integer',
            },
            temporal: {
              type: 'integer',
            },
            version: {
              type: 'string',
            },
          },
        },
        severity: {
          type: 'string',
        },
      },
    },
  },
}
