
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model destinations
 * 
 */
export type destinations = $Result.DefaultSelection<Prisma.$destinationsPayload>
/**
 * Model itineraries
 * 
 */
export type itineraries = $Result.DefaultSelection<Prisma.$itinerariesPayload>
/**
 * Model itinerary_destinations
 * 
 */
export type itinerary_destinations = $Result.DefaultSelection<Prisma.$itinerary_destinationsPayload>
/**
 * Model saved_destinations
 * 
 */
export type saved_destinations = $Result.DefaultSelection<Prisma.$saved_destinationsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Destinations
 * const destinations = await prisma.destinations.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Destinations
   * const destinations = await prisma.destinations.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.destinations`: Exposes CRUD operations for the **destinations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destinations.findMany()
    * ```
    */
  get destinations(): Prisma.destinationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itineraries`: Exposes CRUD operations for the **itineraries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Itineraries
    * const itineraries = await prisma.itineraries.findMany()
    * ```
    */
  get itineraries(): Prisma.itinerariesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itinerary_destinations`: Exposes CRUD operations for the **itinerary_destinations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Itinerary_destinations
    * const itinerary_destinations = await prisma.itinerary_destinations.findMany()
    * ```
    */
  get itinerary_destinations(): Prisma.itinerary_destinationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saved_destinations`: Exposes CRUD operations for the **saved_destinations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saved_destinations
    * const saved_destinations = await prisma.saved_destinations.findMany()
    * ```
    */
  get saved_destinations(): Prisma.saved_destinationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    destinations: 'destinations',
    itineraries: 'itineraries',
    itinerary_destinations: 'itinerary_destinations',
    saved_destinations: 'saved_destinations',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "destinations" | "itineraries" | "itinerary_destinations" | "saved_destinations" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      destinations: {
        payload: Prisma.$destinationsPayload<ExtArgs>
        fields: Prisma.destinationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.destinationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.destinationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          findFirst: {
            args: Prisma.destinationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.destinationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          findMany: {
            args: Prisma.destinationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>[]
          }
          create: {
            args: Prisma.destinationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          createMany: {
            args: Prisma.destinationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.destinationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>[]
          }
          delete: {
            args: Prisma.destinationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          update: {
            args: Prisma.destinationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          deleteMany: {
            args: Prisma.destinationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.destinationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.destinationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>[]
          }
          upsert: {
            args: Prisma.destinationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$destinationsPayload>
          }
          aggregate: {
            args: Prisma.DestinationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestinations>
          }
          groupBy: {
            args: Prisma.destinationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.destinationsCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationsCountAggregateOutputType> | number
          }
        }
      }
      itineraries: {
        payload: Prisma.$itinerariesPayload<ExtArgs>
        fields: Prisma.itinerariesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itinerariesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerariesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itinerariesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerariesPayload>
          }
          findFirst: {
            args: Prisma.itinerariesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerariesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itinerariesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerariesPayload>
          }
          findMany: {
            args: Prisma.itinerariesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerariesPayload>[]
          }
          create: {
            args: Prisma.itinerariesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerariesPayload>
          }
          createMany: {
            args: Prisma.itinerariesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.itinerariesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerariesPayload>[]
          }
          delete: {
            args: Prisma.itinerariesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerariesPayload>
          }
          update: {
            args: Prisma.itinerariesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerariesPayload>
          }
          deleteMany: {
            args: Prisma.itinerariesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itinerariesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.itinerariesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerariesPayload>[]
          }
          upsert: {
            args: Prisma.itinerariesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerariesPayload>
          }
          aggregate: {
            args: Prisma.ItinerariesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItineraries>
          }
          groupBy: {
            args: Prisma.itinerariesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItinerariesGroupByOutputType>[]
          }
          count: {
            args: Prisma.itinerariesCountArgs<ExtArgs>
            result: $Utils.Optional<ItinerariesCountAggregateOutputType> | number
          }
        }
      }
      itinerary_destinations: {
        payload: Prisma.$itinerary_destinationsPayload<ExtArgs>
        fields: Prisma.itinerary_destinationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itinerary_destinationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerary_destinationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itinerary_destinationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerary_destinationsPayload>
          }
          findFirst: {
            args: Prisma.itinerary_destinationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerary_destinationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itinerary_destinationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerary_destinationsPayload>
          }
          findMany: {
            args: Prisma.itinerary_destinationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerary_destinationsPayload>[]
          }
          create: {
            args: Prisma.itinerary_destinationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerary_destinationsPayload>
          }
          createMany: {
            args: Prisma.itinerary_destinationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.itinerary_destinationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerary_destinationsPayload>[]
          }
          delete: {
            args: Prisma.itinerary_destinationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerary_destinationsPayload>
          }
          update: {
            args: Prisma.itinerary_destinationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerary_destinationsPayload>
          }
          deleteMany: {
            args: Prisma.itinerary_destinationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itinerary_destinationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.itinerary_destinationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerary_destinationsPayload>[]
          }
          upsert: {
            args: Prisma.itinerary_destinationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itinerary_destinationsPayload>
          }
          aggregate: {
            args: Prisma.Itinerary_destinationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItinerary_destinations>
          }
          groupBy: {
            args: Prisma.itinerary_destinationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Itinerary_destinationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.itinerary_destinationsCountArgs<ExtArgs>
            result: $Utils.Optional<Itinerary_destinationsCountAggregateOutputType> | number
          }
        }
      }
      saved_destinations: {
        payload: Prisma.$saved_destinationsPayload<ExtArgs>
        fields: Prisma.saved_destinationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saved_destinationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_destinationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saved_destinationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_destinationsPayload>
          }
          findFirst: {
            args: Prisma.saved_destinationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_destinationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saved_destinationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_destinationsPayload>
          }
          findMany: {
            args: Prisma.saved_destinationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_destinationsPayload>[]
          }
          create: {
            args: Prisma.saved_destinationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_destinationsPayload>
          }
          createMany: {
            args: Prisma.saved_destinationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.saved_destinationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_destinationsPayload>[]
          }
          delete: {
            args: Prisma.saved_destinationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_destinationsPayload>
          }
          update: {
            args: Prisma.saved_destinationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_destinationsPayload>
          }
          deleteMany: {
            args: Prisma.saved_destinationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saved_destinationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.saved_destinationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_destinationsPayload>[]
          }
          upsert: {
            args: Prisma.saved_destinationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_destinationsPayload>
          }
          aggregate: {
            args: Prisma.Saved_destinationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaved_destinations>
          }
          groupBy: {
            args: Prisma.saved_destinationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Saved_destinationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.saved_destinationsCountArgs<ExtArgs>
            result: $Utils.Optional<Saved_destinationsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    destinations?: destinationsOmit
    itineraries?: itinerariesOmit
    itinerary_destinations?: itinerary_destinationsOmit
    saved_destinations?: saved_destinationsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DestinationsCountOutputType
   */

  export type DestinationsCountOutputType = {
    itinerary_destinations: number
    saved_destinations: number
  }

  export type DestinationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itinerary_destinations?: boolean | DestinationsCountOutputTypeCountItinerary_destinationsArgs
    saved_destinations?: boolean | DestinationsCountOutputTypeCountSaved_destinationsArgs
  }

  // Custom InputTypes
  /**
   * DestinationsCountOutputType without action
   */
  export type DestinationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationsCountOutputType
     */
    select?: DestinationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationsCountOutputType without action
   */
  export type DestinationsCountOutputTypeCountItinerary_destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itinerary_destinationsWhereInput
  }

  /**
   * DestinationsCountOutputType without action
   */
  export type DestinationsCountOutputTypeCountSaved_destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_destinationsWhereInput
  }


  /**
   * Count Type ItinerariesCountOutputType
   */

  export type ItinerariesCountOutputType = {
    itinerary_destinations: number
  }

  export type ItinerariesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itinerary_destinations?: boolean | ItinerariesCountOutputTypeCountItinerary_destinationsArgs
  }

  // Custom InputTypes
  /**
   * ItinerariesCountOutputType without action
   */
  export type ItinerariesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItinerariesCountOutputType
     */
    select?: ItinerariesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItinerariesCountOutputType without action
   */
  export type ItinerariesCountOutputTypeCountItinerary_destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itinerary_destinationsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    destinations: number
    itineraries: number
    saved_destinations: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | UsersCountOutputTypeCountDestinationsArgs
    itineraries?: boolean | UsersCountOutputTypeCountItinerariesArgs
    saved_destinations?: boolean | UsersCountOutputTypeCountSaved_destinationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: destinationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountItinerariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itinerariesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSaved_destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_destinationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model destinations
   */

  export type AggregateDestinations = {
    _count: DestinationsCountAggregateOutputType | null
    _avg: DestinationsAvgAggregateOutputType | null
    _sum: DestinationsSumAggregateOutputType | null
    _min: DestinationsMinAggregateOutputType | null
    _max: DestinationsMaxAggregateOutputType | null
  }

  export type DestinationsAvgAggregateOutputType = {
    id: number | null
    created_by_id: number | null
  }

  export type DestinationsSumAggregateOutputType = {
    id: number | null
    created_by_id: number | null
  }

  export type DestinationsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    location: string | null
    image: string | null
    category: string | null
    created_by_id: number | null
  }

  export type DestinationsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    location: string | null
    image: string | null
    category: string | null
    created_by_id: number | null
  }

  export type DestinationsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    location: number
    image: number
    category: number
    created_by_id: number
    _all: number
  }


  export type DestinationsAvgAggregateInputType = {
    id?: true
    created_by_id?: true
  }

  export type DestinationsSumAggregateInputType = {
    id?: true
    created_by_id?: true
  }

  export type DestinationsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    image?: true
    category?: true
    created_by_id?: true
  }

  export type DestinationsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    image?: true
    category?: true
    created_by_id?: true
  }

  export type DestinationsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    image?: true
    category?: true
    created_by_id?: true
    _all?: true
  }

  export type DestinationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which destinations to aggregate.
     */
    where?: destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinations to fetch.
     */
    orderBy?: destinationsOrderByWithRelationInput | destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned destinations
    **/
    _count?: true | DestinationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationsMaxAggregateInputType
  }

  export type GetDestinationsAggregateType<T extends DestinationsAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinations[P]>
      : GetScalarType<T[P], AggregateDestinations[P]>
  }




  export type destinationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: destinationsWhereInput
    orderBy?: destinationsOrderByWithAggregationInput | destinationsOrderByWithAggregationInput[]
    by: DestinationsScalarFieldEnum[] | DestinationsScalarFieldEnum
    having?: destinationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationsCountAggregateInputType | true
    _avg?: DestinationsAvgAggregateInputType
    _sum?: DestinationsSumAggregateInputType
    _min?: DestinationsMinAggregateInputType
    _max?: DestinationsMaxAggregateInputType
  }

  export type DestinationsGroupByOutputType = {
    id: number
    title: string
    description: string | null
    location: string | null
    image: string | null
    category: string | null
    created_by_id: number | null
    _count: DestinationsCountAggregateOutputType | null
    _avg: DestinationsAvgAggregateOutputType | null
    _sum: DestinationsSumAggregateOutputType | null
    _min: DestinationsMinAggregateOutputType | null
    _max: DestinationsMaxAggregateOutputType | null
  }

  type GetDestinationsGroupByPayload<T extends destinationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationsGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationsGroupByOutputType[P]>
        }
      >
    >


  export type destinationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    image?: boolean
    category?: boolean
    created_by_id?: boolean
    users?: boolean | destinations$usersArgs<ExtArgs>
    itinerary_destinations?: boolean | destinations$itinerary_destinationsArgs<ExtArgs>
    saved_destinations?: boolean | destinations$saved_destinationsArgs<ExtArgs>
    _count?: boolean | DestinationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinations"]>

  export type destinationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    image?: boolean
    category?: boolean
    created_by_id?: boolean
    users?: boolean | destinations$usersArgs<ExtArgs>
  }, ExtArgs["result"]["destinations"]>

  export type destinationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    image?: boolean
    category?: boolean
    created_by_id?: boolean
    users?: boolean | destinations$usersArgs<ExtArgs>
  }, ExtArgs["result"]["destinations"]>

  export type destinationsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    image?: boolean
    category?: boolean
    created_by_id?: boolean
  }

  export type destinationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "location" | "image" | "category" | "created_by_id", ExtArgs["result"]["destinations"]>
  export type destinationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | destinations$usersArgs<ExtArgs>
    itinerary_destinations?: boolean | destinations$itinerary_destinationsArgs<ExtArgs>
    saved_destinations?: boolean | destinations$saved_destinationsArgs<ExtArgs>
    _count?: boolean | DestinationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type destinationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | destinations$usersArgs<ExtArgs>
  }
  export type destinationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | destinations$usersArgs<ExtArgs>
  }

  export type $destinationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "destinations"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      itinerary_destinations: Prisma.$itinerary_destinationsPayload<ExtArgs>[]
      saved_destinations: Prisma.$saved_destinationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      location: string | null
      image: string | null
      category: string | null
      created_by_id: number | null
    }, ExtArgs["result"]["destinations"]>
    composites: {}
  }

  type destinationsGetPayload<S extends boolean | null | undefined | destinationsDefaultArgs> = $Result.GetResult<Prisma.$destinationsPayload, S>

  type destinationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<destinationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationsCountAggregateInputType | true
    }

  export interface destinationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['destinations'], meta: { name: 'destinations' } }
    /**
     * Find zero or one Destinations that matches the filter.
     * @param {destinationsFindUniqueArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends destinationsFindUniqueArgs>(args: SelectSubset<T, destinationsFindUniqueArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destinations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {destinationsFindUniqueOrThrowArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends destinationsFindUniqueOrThrowArgs>(args: SelectSubset<T, destinationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsFindFirstArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends destinationsFindFirstArgs>(args?: SelectSubset<T, destinationsFindFirstArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destinations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsFindFirstOrThrowArgs} args - Arguments to find a Destinations
     * @example
     * // Get one Destinations
     * const destinations = await prisma.destinations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends destinationsFindFirstOrThrowArgs>(args?: SelectSubset<T, destinationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destinations.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destinations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationsWithIdOnly = await prisma.destinations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends destinationsFindManyArgs>(args?: SelectSubset<T, destinationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destinations.
     * @param {destinationsCreateArgs} args - Arguments to create a Destinations.
     * @example
     * // Create one Destinations
     * const Destinations = await prisma.destinations.create({
     *   data: {
     *     // ... data to create a Destinations
     *   }
     * })
     * 
     */
    create<T extends destinationsCreateArgs>(args: SelectSubset<T, destinationsCreateArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {destinationsCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destinations = await prisma.destinations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends destinationsCreateManyArgs>(args?: SelectSubset<T, destinationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {destinationsCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destinations = await prisma.destinations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id`
     * const destinationsWithIdOnly = await prisma.destinations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends destinationsCreateManyAndReturnArgs>(args?: SelectSubset<T, destinationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Destinations.
     * @param {destinationsDeleteArgs} args - Arguments to delete one Destinations.
     * @example
     * // Delete one Destinations
     * const Destinations = await prisma.destinations.delete({
     *   where: {
     *     // ... filter to delete one Destinations
     *   }
     * })
     * 
     */
    delete<T extends destinationsDeleteArgs>(args: SelectSubset<T, destinationsDeleteArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destinations.
     * @param {destinationsUpdateArgs} args - Arguments to update one Destinations.
     * @example
     * // Update one Destinations
     * const destinations = await prisma.destinations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends destinationsUpdateArgs>(args: SelectSubset<T, destinationsUpdateArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {destinationsDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destinations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends destinationsDeleteManyArgs>(args?: SelectSubset<T, destinationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destinations = await prisma.destinations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends destinationsUpdateManyArgs>(args: SelectSubset<T, destinationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations and returns the data updated in the database.
     * @param {destinationsUpdateManyAndReturnArgs} args - Arguments to update many Destinations.
     * @example
     * // Update many Destinations
     * const destinations = await prisma.destinations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Destinations and only return the `id`
     * const destinationsWithIdOnly = await prisma.destinations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends destinationsUpdateManyAndReturnArgs>(args: SelectSubset<T, destinationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Destinations.
     * @param {destinationsUpsertArgs} args - Arguments to update or create a Destinations.
     * @example
     * // Update or create a Destinations
     * const destinations = await prisma.destinations.upsert({
     *   create: {
     *     // ... data to create a Destinations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destinations we want to update
     *   }
     * })
     */
    upsert<T extends destinationsUpsertArgs>(args: SelectSubset<T, destinationsUpsertArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destinations.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends destinationsCountArgs>(
      args?: Subset<T, destinationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationsAggregateArgs>(args: Subset<T, DestinationsAggregateArgs>): Prisma.PrismaPromise<GetDestinationsAggregateType<T>>

    /**
     * Group by Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {destinationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends destinationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: destinationsGroupByArgs['orderBy'] }
        : { orderBy?: destinationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, destinationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the destinations model
   */
  readonly fields: destinationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for destinations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__destinationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends destinations$usersArgs<ExtArgs> = {}>(args?: Subset<T, destinations$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    itinerary_destinations<T extends destinations$itinerary_destinationsArgs<ExtArgs> = {}>(args?: Subset<T, destinations$itinerary_destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saved_destinations<T extends destinations$saved_destinationsArgs<ExtArgs> = {}>(args?: Subset<T, destinations$saved_destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the destinations model
   */
  interface destinationsFieldRefs {
    readonly id: FieldRef<"destinations", 'Int'>
    readonly title: FieldRef<"destinations", 'String'>
    readonly description: FieldRef<"destinations", 'String'>
    readonly location: FieldRef<"destinations", 'String'>
    readonly image: FieldRef<"destinations", 'String'>
    readonly category: FieldRef<"destinations", 'String'>
    readonly created_by_id: FieldRef<"destinations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * destinations findUnique
   */
  export type destinationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    /**
     * Filter, which destinations to fetch.
     */
    where: destinationsWhereUniqueInput
  }

  /**
   * destinations findUniqueOrThrow
   */
  export type destinationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    /**
     * Filter, which destinations to fetch.
     */
    where: destinationsWhereUniqueInput
  }

  /**
   * destinations findFirst
   */
  export type destinationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    /**
     * Filter, which destinations to fetch.
     */
    where?: destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinations to fetch.
     */
    orderBy?: destinationsOrderByWithRelationInput | destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for destinations.
     */
    cursor?: destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of destinations.
     */
    distinct?: DestinationsScalarFieldEnum | DestinationsScalarFieldEnum[]
  }

  /**
   * destinations findFirstOrThrow
   */
  export type destinationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    /**
     * Filter, which destinations to fetch.
     */
    where?: destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinations to fetch.
     */
    orderBy?: destinationsOrderByWithRelationInput | destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for destinations.
     */
    cursor?: destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of destinations.
     */
    distinct?: DestinationsScalarFieldEnum | DestinationsScalarFieldEnum[]
  }

  /**
   * destinations findMany
   */
  export type destinationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    /**
     * Filter, which destinations to fetch.
     */
    where?: destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of destinations to fetch.
     */
    orderBy?: destinationsOrderByWithRelationInput | destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing destinations.
     */
    cursor?: destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` destinations.
     */
    skip?: number
    distinct?: DestinationsScalarFieldEnum | DestinationsScalarFieldEnum[]
  }

  /**
   * destinations create
   */
  export type destinationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    /**
     * The data needed to create a destinations.
     */
    data: XOR<destinationsCreateInput, destinationsUncheckedCreateInput>
  }

  /**
   * destinations createMany
   */
  export type destinationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many destinations.
     */
    data: destinationsCreateManyInput | destinationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * destinations createManyAndReturn
   */
  export type destinationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * The data used to create many destinations.
     */
    data: destinationsCreateManyInput | destinationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * destinations update
   */
  export type destinationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    /**
     * The data needed to update a destinations.
     */
    data: XOR<destinationsUpdateInput, destinationsUncheckedUpdateInput>
    /**
     * Choose, which destinations to update.
     */
    where: destinationsWhereUniqueInput
  }

  /**
   * destinations updateMany
   */
  export type destinationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update destinations.
     */
    data: XOR<destinationsUpdateManyMutationInput, destinationsUncheckedUpdateManyInput>
    /**
     * Filter which destinations to update
     */
    where?: destinationsWhereInput
    /**
     * Limit how many destinations to update.
     */
    limit?: number
  }

  /**
   * destinations updateManyAndReturn
   */
  export type destinationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * The data used to update destinations.
     */
    data: XOR<destinationsUpdateManyMutationInput, destinationsUncheckedUpdateManyInput>
    /**
     * Filter which destinations to update
     */
    where?: destinationsWhereInput
    /**
     * Limit how many destinations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * destinations upsert
   */
  export type destinationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    /**
     * The filter to search for the destinations to update in case it exists.
     */
    where: destinationsWhereUniqueInput
    /**
     * In case the destinations found by the `where` argument doesn't exist, create a new destinations with this data.
     */
    create: XOR<destinationsCreateInput, destinationsUncheckedCreateInput>
    /**
     * In case the destinations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<destinationsUpdateInput, destinationsUncheckedUpdateInput>
  }

  /**
   * destinations delete
   */
  export type destinationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    /**
     * Filter which destinations to delete.
     */
    where: destinationsWhereUniqueInput
  }

  /**
   * destinations deleteMany
   */
  export type destinationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which destinations to delete
     */
    where?: destinationsWhereInput
    /**
     * Limit how many destinations to delete.
     */
    limit?: number
  }

  /**
   * destinations.users
   */
  export type destinations$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * destinations.itinerary_destinations
   */
  export type destinations$itinerary_destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
    where?: itinerary_destinationsWhereInput
    orderBy?: itinerary_destinationsOrderByWithRelationInput | itinerary_destinationsOrderByWithRelationInput[]
    cursor?: itinerary_destinationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Itinerary_destinationsScalarFieldEnum | Itinerary_destinationsScalarFieldEnum[]
  }

  /**
   * destinations.saved_destinations
   */
  export type destinations$saved_destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
    where?: saved_destinationsWhereInput
    orderBy?: saved_destinationsOrderByWithRelationInput | saved_destinationsOrderByWithRelationInput[]
    cursor?: saved_destinationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_destinationsScalarFieldEnum | Saved_destinationsScalarFieldEnum[]
  }

  /**
   * destinations without action
   */
  export type destinationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
  }


  /**
   * Model itineraries
   */

  export type AggregateItineraries = {
    _count: ItinerariesCountAggregateOutputType | null
    _avg: ItinerariesAvgAggregateOutputType | null
    _sum: ItinerariesSumAggregateOutputType | null
    _min: ItinerariesMinAggregateOutputType | null
    _max: ItinerariesMaxAggregateOutputType | null
  }

  export type ItinerariesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ItinerariesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ItinerariesMinAggregateOutputType = {
    id: number | null
    title: string | null
    user_id: number | null
  }

  export type ItinerariesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    user_id: number | null
  }

  export type ItinerariesCountAggregateOutputType = {
    id: number
    title: number
    user_id: number
    _all: number
  }


  export type ItinerariesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ItinerariesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ItinerariesMinAggregateInputType = {
    id?: true
    title?: true
    user_id?: true
  }

  export type ItinerariesMaxAggregateInputType = {
    id?: true
    title?: true
    user_id?: true
  }

  export type ItinerariesCountAggregateInputType = {
    id?: true
    title?: true
    user_id?: true
    _all?: true
  }

  export type ItinerariesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itineraries to aggregate.
     */
    where?: itinerariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itineraries to fetch.
     */
    orderBy?: itinerariesOrderByWithRelationInput | itinerariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itinerariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned itineraries
    **/
    _count?: true | ItinerariesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItinerariesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItinerariesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItinerariesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItinerariesMaxAggregateInputType
  }

  export type GetItinerariesAggregateType<T extends ItinerariesAggregateArgs> = {
        [P in keyof T & keyof AggregateItineraries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItineraries[P]>
      : GetScalarType<T[P], AggregateItineraries[P]>
  }




  export type itinerariesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itinerariesWhereInput
    orderBy?: itinerariesOrderByWithAggregationInput | itinerariesOrderByWithAggregationInput[]
    by: ItinerariesScalarFieldEnum[] | ItinerariesScalarFieldEnum
    having?: itinerariesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItinerariesCountAggregateInputType | true
    _avg?: ItinerariesAvgAggregateInputType
    _sum?: ItinerariesSumAggregateInputType
    _min?: ItinerariesMinAggregateInputType
    _max?: ItinerariesMaxAggregateInputType
  }

  export type ItinerariesGroupByOutputType = {
    id: number
    title: string | null
    user_id: number | null
    _count: ItinerariesCountAggregateOutputType | null
    _avg: ItinerariesAvgAggregateOutputType | null
    _sum: ItinerariesSumAggregateOutputType | null
    _min: ItinerariesMinAggregateOutputType | null
    _max: ItinerariesMaxAggregateOutputType | null
  }

  type GetItinerariesGroupByPayload<T extends itinerariesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItinerariesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItinerariesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItinerariesGroupByOutputType[P]>
            : GetScalarType<T[P], ItinerariesGroupByOutputType[P]>
        }
      >
    >


  export type itinerariesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    user_id?: boolean
    users?: boolean | itineraries$usersArgs<ExtArgs>
    itinerary_destinations?: boolean | itineraries$itinerary_destinationsArgs<ExtArgs>
    _count?: boolean | ItinerariesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itineraries"]>

  export type itinerariesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    user_id?: boolean
    users?: boolean | itineraries$usersArgs<ExtArgs>
  }, ExtArgs["result"]["itineraries"]>

  export type itinerariesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    user_id?: boolean
    users?: boolean | itineraries$usersArgs<ExtArgs>
  }, ExtArgs["result"]["itineraries"]>

  export type itinerariesSelectScalar = {
    id?: boolean
    title?: boolean
    user_id?: boolean
  }

  export type itinerariesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "user_id", ExtArgs["result"]["itineraries"]>
  export type itinerariesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | itineraries$usersArgs<ExtArgs>
    itinerary_destinations?: boolean | itineraries$itinerary_destinationsArgs<ExtArgs>
    _count?: boolean | ItinerariesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type itinerariesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | itineraries$usersArgs<ExtArgs>
  }
  export type itinerariesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | itineraries$usersArgs<ExtArgs>
  }

  export type $itinerariesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "itineraries"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      itinerary_destinations: Prisma.$itinerary_destinationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      user_id: number | null
    }, ExtArgs["result"]["itineraries"]>
    composites: {}
  }

  type itinerariesGetPayload<S extends boolean | null | undefined | itinerariesDefaultArgs> = $Result.GetResult<Prisma.$itinerariesPayload, S>

  type itinerariesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itinerariesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItinerariesCountAggregateInputType | true
    }

  export interface itinerariesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['itineraries'], meta: { name: 'itineraries' } }
    /**
     * Find zero or one Itineraries that matches the filter.
     * @param {itinerariesFindUniqueArgs} args - Arguments to find a Itineraries
     * @example
     * // Get one Itineraries
     * const itineraries = await prisma.itineraries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itinerariesFindUniqueArgs>(args: SelectSubset<T, itinerariesFindUniqueArgs<ExtArgs>>): Prisma__itinerariesClient<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Itineraries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itinerariesFindUniqueOrThrowArgs} args - Arguments to find a Itineraries
     * @example
     * // Get one Itineraries
     * const itineraries = await prisma.itineraries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itinerariesFindUniqueOrThrowArgs>(args: SelectSubset<T, itinerariesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itinerariesClient<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itineraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerariesFindFirstArgs} args - Arguments to find a Itineraries
     * @example
     * // Get one Itineraries
     * const itineraries = await prisma.itineraries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itinerariesFindFirstArgs>(args?: SelectSubset<T, itinerariesFindFirstArgs<ExtArgs>>): Prisma__itinerariesClient<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itineraries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerariesFindFirstOrThrowArgs} args - Arguments to find a Itineraries
     * @example
     * // Get one Itineraries
     * const itineraries = await prisma.itineraries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itinerariesFindFirstOrThrowArgs>(args?: SelectSubset<T, itinerariesFindFirstOrThrowArgs<ExtArgs>>): Prisma__itinerariesClient<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Itineraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerariesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Itineraries
     * const itineraries = await prisma.itineraries.findMany()
     * 
     * // Get first 10 Itineraries
     * const itineraries = await prisma.itineraries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itinerariesWithIdOnly = await prisma.itineraries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends itinerariesFindManyArgs>(args?: SelectSubset<T, itinerariesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Itineraries.
     * @param {itinerariesCreateArgs} args - Arguments to create a Itineraries.
     * @example
     * // Create one Itineraries
     * const Itineraries = await prisma.itineraries.create({
     *   data: {
     *     // ... data to create a Itineraries
     *   }
     * })
     * 
     */
    create<T extends itinerariesCreateArgs>(args: SelectSubset<T, itinerariesCreateArgs<ExtArgs>>): Prisma__itinerariesClient<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Itineraries.
     * @param {itinerariesCreateManyArgs} args - Arguments to create many Itineraries.
     * @example
     * // Create many Itineraries
     * const itineraries = await prisma.itineraries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itinerariesCreateManyArgs>(args?: SelectSubset<T, itinerariesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Itineraries and returns the data saved in the database.
     * @param {itinerariesCreateManyAndReturnArgs} args - Arguments to create many Itineraries.
     * @example
     * // Create many Itineraries
     * const itineraries = await prisma.itineraries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Itineraries and only return the `id`
     * const itinerariesWithIdOnly = await prisma.itineraries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends itinerariesCreateManyAndReturnArgs>(args?: SelectSubset<T, itinerariesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Itineraries.
     * @param {itinerariesDeleteArgs} args - Arguments to delete one Itineraries.
     * @example
     * // Delete one Itineraries
     * const Itineraries = await prisma.itineraries.delete({
     *   where: {
     *     // ... filter to delete one Itineraries
     *   }
     * })
     * 
     */
    delete<T extends itinerariesDeleteArgs>(args: SelectSubset<T, itinerariesDeleteArgs<ExtArgs>>): Prisma__itinerariesClient<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Itineraries.
     * @param {itinerariesUpdateArgs} args - Arguments to update one Itineraries.
     * @example
     * // Update one Itineraries
     * const itineraries = await prisma.itineraries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itinerariesUpdateArgs>(args: SelectSubset<T, itinerariesUpdateArgs<ExtArgs>>): Prisma__itinerariesClient<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Itineraries.
     * @param {itinerariesDeleteManyArgs} args - Arguments to filter Itineraries to delete.
     * @example
     * // Delete a few Itineraries
     * const { count } = await prisma.itineraries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itinerariesDeleteManyArgs>(args?: SelectSubset<T, itinerariesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerariesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Itineraries
     * const itineraries = await prisma.itineraries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itinerariesUpdateManyArgs>(args: SelectSubset<T, itinerariesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itineraries and returns the data updated in the database.
     * @param {itinerariesUpdateManyAndReturnArgs} args - Arguments to update many Itineraries.
     * @example
     * // Update many Itineraries
     * const itineraries = await prisma.itineraries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Itineraries and only return the `id`
     * const itinerariesWithIdOnly = await prisma.itineraries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends itinerariesUpdateManyAndReturnArgs>(args: SelectSubset<T, itinerariesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Itineraries.
     * @param {itinerariesUpsertArgs} args - Arguments to update or create a Itineraries.
     * @example
     * // Update or create a Itineraries
     * const itineraries = await prisma.itineraries.upsert({
     *   create: {
     *     // ... data to create a Itineraries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Itineraries we want to update
     *   }
     * })
     */
    upsert<T extends itinerariesUpsertArgs>(args: SelectSubset<T, itinerariesUpsertArgs<ExtArgs>>): Prisma__itinerariesClient<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Itineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerariesCountArgs} args - Arguments to filter Itineraries to count.
     * @example
     * // Count the number of Itineraries
     * const count = await prisma.itineraries.count({
     *   where: {
     *     // ... the filter for the Itineraries we want to count
     *   }
     * })
    **/
    count<T extends itinerariesCountArgs>(
      args?: Subset<T, itinerariesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItinerariesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Itineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItinerariesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItinerariesAggregateArgs>(args: Subset<T, ItinerariesAggregateArgs>): Prisma.PrismaPromise<GetItinerariesAggregateType<T>>

    /**
     * Group by Itineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerariesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itinerariesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itinerariesGroupByArgs['orderBy'] }
        : { orderBy?: itinerariesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itinerariesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItinerariesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the itineraries model
   */
  readonly fields: itinerariesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for itineraries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itinerariesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends itineraries$usersArgs<ExtArgs> = {}>(args?: Subset<T, itineraries$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    itinerary_destinations<T extends itineraries$itinerary_destinationsArgs<ExtArgs> = {}>(args?: Subset<T, itineraries$itinerary_destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the itineraries model
   */
  interface itinerariesFieldRefs {
    readonly id: FieldRef<"itineraries", 'Int'>
    readonly title: FieldRef<"itineraries", 'String'>
    readonly user_id: FieldRef<"itineraries", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * itineraries findUnique
   */
  export type itinerariesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
    /**
     * Filter, which itineraries to fetch.
     */
    where: itinerariesWhereUniqueInput
  }

  /**
   * itineraries findUniqueOrThrow
   */
  export type itinerariesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
    /**
     * Filter, which itineraries to fetch.
     */
    where: itinerariesWhereUniqueInput
  }

  /**
   * itineraries findFirst
   */
  export type itinerariesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
    /**
     * Filter, which itineraries to fetch.
     */
    where?: itinerariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itineraries to fetch.
     */
    orderBy?: itinerariesOrderByWithRelationInput | itinerariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itineraries.
     */
    cursor?: itinerariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itineraries.
     */
    distinct?: ItinerariesScalarFieldEnum | ItinerariesScalarFieldEnum[]
  }

  /**
   * itineraries findFirstOrThrow
   */
  export type itinerariesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
    /**
     * Filter, which itineraries to fetch.
     */
    where?: itinerariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itineraries to fetch.
     */
    orderBy?: itinerariesOrderByWithRelationInput | itinerariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itineraries.
     */
    cursor?: itinerariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itineraries.
     */
    distinct?: ItinerariesScalarFieldEnum | ItinerariesScalarFieldEnum[]
  }

  /**
   * itineraries findMany
   */
  export type itinerariesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
    /**
     * Filter, which itineraries to fetch.
     */
    where?: itinerariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itineraries to fetch.
     */
    orderBy?: itinerariesOrderByWithRelationInput | itinerariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing itineraries.
     */
    cursor?: itinerariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itineraries.
     */
    skip?: number
    distinct?: ItinerariesScalarFieldEnum | ItinerariesScalarFieldEnum[]
  }

  /**
   * itineraries create
   */
  export type itinerariesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
    /**
     * The data needed to create a itineraries.
     */
    data?: XOR<itinerariesCreateInput, itinerariesUncheckedCreateInput>
  }

  /**
   * itineraries createMany
   */
  export type itinerariesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many itineraries.
     */
    data: itinerariesCreateManyInput | itinerariesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * itineraries createManyAndReturn
   */
  export type itinerariesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * The data used to create many itineraries.
     */
    data: itinerariesCreateManyInput | itinerariesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * itineraries update
   */
  export type itinerariesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
    /**
     * The data needed to update a itineraries.
     */
    data: XOR<itinerariesUpdateInput, itinerariesUncheckedUpdateInput>
    /**
     * Choose, which itineraries to update.
     */
    where: itinerariesWhereUniqueInput
  }

  /**
   * itineraries updateMany
   */
  export type itinerariesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update itineraries.
     */
    data: XOR<itinerariesUpdateManyMutationInput, itinerariesUncheckedUpdateManyInput>
    /**
     * Filter which itineraries to update
     */
    where?: itinerariesWhereInput
    /**
     * Limit how many itineraries to update.
     */
    limit?: number
  }

  /**
   * itineraries updateManyAndReturn
   */
  export type itinerariesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * The data used to update itineraries.
     */
    data: XOR<itinerariesUpdateManyMutationInput, itinerariesUncheckedUpdateManyInput>
    /**
     * Filter which itineraries to update
     */
    where?: itinerariesWhereInput
    /**
     * Limit how many itineraries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * itineraries upsert
   */
  export type itinerariesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
    /**
     * The filter to search for the itineraries to update in case it exists.
     */
    where: itinerariesWhereUniqueInput
    /**
     * In case the itineraries found by the `where` argument doesn't exist, create a new itineraries with this data.
     */
    create: XOR<itinerariesCreateInput, itinerariesUncheckedCreateInput>
    /**
     * In case the itineraries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itinerariesUpdateInput, itinerariesUncheckedUpdateInput>
  }

  /**
   * itineraries delete
   */
  export type itinerariesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
    /**
     * Filter which itineraries to delete.
     */
    where: itinerariesWhereUniqueInput
  }

  /**
   * itineraries deleteMany
   */
  export type itinerariesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itineraries to delete
     */
    where?: itinerariesWhereInput
    /**
     * Limit how many itineraries to delete.
     */
    limit?: number
  }

  /**
   * itineraries.users
   */
  export type itineraries$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * itineraries.itinerary_destinations
   */
  export type itineraries$itinerary_destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
    where?: itinerary_destinationsWhereInput
    orderBy?: itinerary_destinationsOrderByWithRelationInput | itinerary_destinationsOrderByWithRelationInput[]
    cursor?: itinerary_destinationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Itinerary_destinationsScalarFieldEnum | Itinerary_destinationsScalarFieldEnum[]
  }

  /**
   * itineraries without action
   */
  export type itinerariesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
  }


  /**
   * Model itinerary_destinations
   */

  export type AggregateItinerary_destinations = {
    _count: Itinerary_destinationsCountAggregateOutputType | null
    _avg: Itinerary_destinationsAvgAggregateOutputType | null
    _sum: Itinerary_destinationsSumAggregateOutputType | null
    _min: Itinerary_destinationsMinAggregateOutputType | null
    _max: Itinerary_destinationsMaxAggregateOutputType | null
  }

  export type Itinerary_destinationsAvgAggregateOutputType = {
    id: number | null
    itinerary_id: number | null
    destination_id: number | null
  }

  export type Itinerary_destinationsSumAggregateOutputType = {
    id: number | null
    itinerary_id: number | null
    destination_id: number | null
  }

  export type Itinerary_destinationsMinAggregateOutputType = {
    id: number | null
    itinerary_id: number | null
    destination_id: number | null
  }

  export type Itinerary_destinationsMaxAggregateOutputType = {
    id: number | null
    itinerary_id: number | null
    destination_id: number | null
  }

  export type Itinerary_destinationsCountAggregateOutputType = {
    id: number
    itinerary_id: number
    destination_id: number
    _all: number
  }


  export type Itinerary_destinationsAvgAggregateInputType = {
    id?: true
    itinerary_id?: true
    destination_id?: true
  }

  export type Itinerary_destinationsSumAggregateInputType = {
    id?: true
    itinerary_id?: true
    destination_id?: true
  }

  export type Itinerary_destinationsMinAggregateInputType = {
    id?: true
    itinerary_id?: true
    destination_id?: true
  }

  export type Itinerary_destinationsMaxAggregateInputType = {
    id?: true
    itinerary_id?: true
    destination_id?: true
  }

  export type Itinerary_destinationsCountAggregateInputType = {
    id?: true
    itinerary_id?: true
    destination_id?: true
    _all?: true
  }

  export type Itinerary_destinationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itinerary_destinations to aggregate.
     */
    where?: itinerary_destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itinerary_destinations to fetch.
     */
    orderBy?: itinerary_destinationsOrderByWithRelationInput | itinerary_destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itinerary_destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itinerary_destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itinerary_destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned itinerary_destinations
    **/
    _count?: true | Itinerary_destinationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Itinerary_destinationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Itinerary_destinationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Itinerary_destinationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Itinerary_destinationsMaxAggregateInputType
  }

  export type GetItinerary_destinationsAggregateType<T extends Itinerary_destinationsAggregateArgs> = {
        [P in keyof T & keyof AggregateItinerary_destinations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItinerary_destinations[P]>
      : GetScalarType<T[P], AggregateItinerary_destinations[P]>
  }




  export type itinerary_destinationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itinerary_destinationsWhereInput
    orderBy?: itinerary_destinationsOrderByWithAggregationInput | itinerary_destinationsOrderByWithAggregationInput[]
    by: Itinerary_destinationsScalarFieldEnum[] | Itinerary_destinationsScalarFieldEnum
    having?: itinerary_destinationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Itinerary_destinationsCountAggregateInputType | true
    _avg?: Itinerary_destinationsAvgAggregateInputType
    _sum?: Itinerary_destinationsSumAggregateInputType
    _min?: Itinerary_destinationsMinAggregateInputType
    _max?: Itinerary_destinationsMaxAggregateInputType
  }

  export type Itinerary_destinationsGroupByOutputType = {
    id: number
    itinerary_id: number | null
    destination_id: number | null
    _count: Itinerary_destinationsCountAggregateOutputType | null
    _avg: Itinerary_destinationsAvgAggregateOutputType | null
    _sum: Itinerary_destinationsSumAggregateOutputType | null
    _min: Itinerary_destinationsMinAggregateOutputType | null
    _max: Itinerary_destinationsMaxAggregateOutputType | null
  }

  type GetItinerary_destinationsGroupByPayload<T extends itinerary_destinationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Itinerary_destinationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Itinerary_destinationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Itinerary_destinationsGroupByOutputType[P]>
            : GetScalarType<T[P], Itinerary_destinationsGroupByOutputType[P]>
        }
      >
    >


  export type itinerary_destinationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itinerary_id?: boolean
    destination_id?: boolean
    destinations?: boolean | itinerary_destinations$destinationsArgs<ExtArgs>
    itineraries?: boolean | itinerary_destinations$itinerariesArgs<ExtArgs>
  }, ExtArgs["result"]["itinerary_destinations"]>

  export type itinerary_destinationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itinerary_id?: boolean
    destination_id?: boolean
    destinations?: boolean | itinerary_destinations$destinationsArgs<ExtArgs>
    itineraries?: boolean | itinerary_destinations$itinerariesArgs<ExtArgs>
  }, ExtArgs["result"]["itinerary_destinations"]>

  export type itinerary_destinationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itinerary_id?: boolean
    destination_id?: boolean
    destinations?: boolean | itinerary_destinations$destinationsArgs<ExtArgs>
    itineraries?: boolean | itinerary_destinations$itinerariesArgs<ExtArgs>
  }, ExtArgs["result"]["itinerary_destinations"]>

  export type itinerary_destinationsSelectScalar = {
    id?: boolean
    itinerary_id?: boolean
    destination_id?: boolean
  }

  export type itinerary_destinationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itinerary_id" | "destination_id", ExtArgs["result"]["itinerary_destinations"]>
  export type itinerary_destinationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | itinerary_destinations$destinationsArgs<ExtArgs>
    itineraries?: boolean | itinerary_destinations$itinerariesArgs<ExtArgs>
  }
  export type itinerary_destinationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | itinerary_destinations$destinationsArgs<ExtArgs>
    itineraries?: boolean | itinerary_destinations$itinerariesArgs<ExtArgs>
  }
  export type itinerary_destinationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | itinerary_destinations$destinationsArgs<ExtArgs>
    itineraries?: boolean | itinerary_destinations$itinerariesArgs<ExtArgs>
  }

  export type $itinerary_destinationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "itinerary_destinations"
    objects: {
      destinations: Prisma.$destinationsPayload<ExtArgs> | null
      itineraries: Prisma.$itinerariesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      itinerary_id: number | null
      destination_id: number | null
    }, ExtArgs["result"]["itinerary_destinations"]>
    composites: {}
  }

  type itinerary_destinationsGetPayload<S extends boolean | null | undefined | itinerary_destinationsDefaultArgs> = $Result.GetResult<Prisma.$itinerary_destinationsPayload, S>

  type itinerary_destinationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itinerary_destinationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Itinerary_destinationsCountAggregateInputType | true
    }

  export interface itinerary_destinationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['itinerary_destinations'], meta: { name: 'itinerary_destinations' } }
    /**
     * Find zero or one Itinerary_destinations that matches the filter.
     * @param {itinerary_destinationsFindUniqueArgs} args - Arguments to find a Itinerary_destinations
     * @example
     * // Get one Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itinerary_destinationsFindUniqueArgs>(args: SelectSubset<T, itinerary_destinationsFindUniqueArgs<ExtArgs>>): Prisma__itinerary_destinationsClient<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Itinerary_destinations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itinerary_destinationsFindUniqueOrThrowArgs} args - Arguments to find a Itinerary_destinations
     * @example
     * // Get one Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itinerary_destinationsFindUniqueOrThrowArgs>(args: SelectSubset<T, itinerary_destinationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itinerary_destinationsClient<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itinerary_destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerary_destinationsFindFirstArgs} args - Arguments to find a Itinerary_destinations
     * @example
     * // Get one Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itinerary_destinationsFindFirstArgs>(args?: SelectSubset<T, itinerary_destinationsFindFirstArgs<ExtArgs>>): Prisma__itinerary_destinationsClient<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itinerary_destinations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerary_destinationsFindFirstOrThrowArgs} args - Arguments to find a Itinerary_destinations
     * @example
     * // Get one Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itinerary_destinationsFindFirstOrThrowArgs>(args?: SelectSubset<T, itinerary_destinationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__itinerary_destinationsClient<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Itinerary_destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerary_destinationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.findMany()
     * 
     * // Get first 10 Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itinerary_destinationsWithIdOnly = await prisma.itinerary_destinations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends itinerary_destinationsFindManyArgs>(args?: SelectSubset<T, itinerary_destinationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Itinerary_destinations.
     * @param {itinerary_destinationsCreateArgs} args - Arguments to create a Itinerary_destinations.
     * @example
     * // Create one Itinerary_destinations
     * const Itinerary_destinations = await prisma.itinerary_destinations.create({
     *   data: {
     *     // ... data to create a Itinerary_destinations
     *   }
     * })
     * 
     */
    create<T extends itinerary_destinationsCreateArgs>(args: SelectSubset<T, itinerary_destinationsCreateArgs<ExtArgs>>): Prisma__itinerary_destinationsClient<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Itinerary_destinations.
     * @param {itinerary_destinationsCreateManyArgs} args - Arguments to create many Itinerary_destinations.
     * @example
     * // Create many Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itinerary_destinationsCreateManyArgs>(args?: SelectSubset<T, itinerary_destinationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Itinerary_destinations and returns the data saved in the database.
     * @param {itinerary_destinationsCreateManyAndReturnArgs} args - Arguments to create many Itinerary_destinations.
     * @example
     * // Create many Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Itinerary_destinations and only return the `id`
     * const itinerary_destinationsWithIdOnly = await prisma.itinerary_destinations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends itinerary_destinationsCreateManyAndReturnArgs>(args?: SelectSubset<T, itinerary_destinationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Itinerary_destinations.
     * @param {itinerary_destinationsDeleteArgs} args - Arguments to delete one Itinerary_destinations.
     * @example
     * // Delete one Itinerary_destinations
     * const Itinerary_destinations = await prisma.itinerary_destinations.delete({
     *   where: {
     *     // ... filter to delete one Itinerary_destinations
     *   }
     * })
     * 
     */
    delete<T extends itinerary_destinationsDeleteArgs>(args: SelectSubset<T, itinerary_destinationsDeleteArgs<ExtArgs>>): Prisma__itinerary_destinationsClient<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Itinerary_destinations.
     * @param {itinerary_destinationsUpdateArgs} args - Arguments to update one Itinerary_destinations.
     * @example
     * // Update one Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itinerary_destinationsUpdateArgs>(args: SelectSubset<T, itinerary_destinationsUpdateArgs<ExtArgs>>): Prisma__itinerary_destinationsClient<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Itinerary_destinations.
     * @param {itinerary_destinationsDeleteManyArgs} args - Arguments to filter Itinerary_destinations to delete.
     * @example
     * // Delete a few Itinerary_destinations
     * const { count } = await prisma.itinerary_destinations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itinerary_destinationsDeleteManyArgs>(args?: SelectSubset<T, itinerary_destinationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itinerary_destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerary_destinationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itinerary_destinationsUpdateManyArgs>(args: SelectSubset<T, itinerary_destinationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itinerary_destinations and returns the data updated in the database.
     * @param {itinerary_destinationsUpdateManyAndReturnArgs} args - Arguments to update many Itinerary_destinations.
     * @example
     * // Update many Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Itinerary_destinations and only return the `id`
     * const itinerary_destinationsWithIdOnly = await prisma.itinerary_destinations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends itinerary_destinationsUpdateManyAndReturnArgs>(args: SelectSubset<T, itinerary_destinationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Itinerary_destinations.
     * @param {itinerary_destinationsUpsertArgs} args - Arguments to update or create a Itinerary_destinations.
     * @example
     * // Update or create a Itinerary_destinations
     * const itinerary_destinations = await prisma.itinerary_destinations.upsert({
     *   create: {
     *     // ... data to create a Itinerary_destinations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Itinerary_destinations we want to update
     *   }
     * })
     */
    upsert<T extends itinerary_destinationsUpsertArgs>(args: SelectSubset<T, itinerary_destinationsUpsertArgs<ExtArgs>>): Prisma__itinerary_destinationsClient<$Result.GetResult<Prisma.$itinerary_destinationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Itinerary_destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerary_destinationsCountArgs} args - Arguments to filter Itinerary_destinations to count.
     * @example
     * // Count the number of Itinerary_destinations
     * const count = await prisma.itinerary_destinations.count({
     *   where: {
     *     // ... the filter for the Itinerary_destinations we want to count
     *   }
     * })
    **/
    count<T extends itinerary_destinationsCountArgs>(
      args?: Subset<T, itinerary_destinationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Itinerary_destinationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Itinerary_destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Itinerary_destinationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Itinerary_destinationsAggregateArgs>(args: Subset<T, Itinerary_destinationsAggregateArgs>): Prisma.PrismaPromise<GetItinerary_destinationsAggregateType<T>>

    /**
     * Group by Itinerary_destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itinerary_destinationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itinerary_destinationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itinerary_destinationsGroupByArgs['orderBy'] }
        : { orderBy?: itinerary_destinationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itinerary_destinationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItinerary_destinationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the itinerary_destinations model
   */
  readonly fields: itinerary_destinationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for itinerary_destinations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itinerary_destinationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destinations<T extends itinerary_destinations$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, itinerary_destinations$destinationsArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    itineraries<T extends itinerary_destinations$itinerariesArgs<ExtArgs> = {}>(args?: Subset<T, itinerary_destinations$itinerariesArgs<ExtArgs>>): Prisma__itinerariesClient<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the itinerary_destinations model
   */
  interface itinerary_destinationsFieldRefs {
    readonly id: FieldRef<"itinerary_destinations", 'Int'>
    readonly itinerary_id: FieldRef<"itinerary_destinations", 'Int'>
    readonly destination_id: FieldRef<"itinerary_destinations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * itinerary_destinations findUnique
   */
  export type itinerary_destinationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
    /**
     * Filter, which itinerary_destinations to fetch.
     */
    where: itinerary_destinationsWhereUniqueInput
  }

  /**
   * itinerary_destinations findUniqueOrThrow
   */
  export type itinerary_destinationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
    /**
     * Filter, which itinerary_destinations to fetch.
     */
    where: itinerary_destinationsWhereUniqueInput
  }

  /**
   * itinerary_destinations findFirst
   */
  export type itinerary_destinationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
    /**
     * Filter, which itinerary_destinations to fetch.
     */
    where?: itinerary_destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itinerary_destinations to fetch.
     */
    orderBy?: itinerary_destinationsOrderByWithRelationInput | itinerary_destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itinerary_destinations.
     */
    cursor?: itinerary_destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itinerary_destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itinerary_destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itinerary_destinations.
     */
    distinct?: Itinerary_destinationsScalarFieldEnum | Itinerary_destinationsScalarFieldEnum[]
  }

  /**
   * itinerary_destinations findFirstOrThrow
   */
  export type itinerary_destinationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
    /**
     * Filter, which itinerary_destinations to fetch.
     */
    where?: itinerary_destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itinerary_destinations to fetch.
     */
    orderBy?: itinerary_destinationsOrderByWithRelationInput | itinerary_destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itinerary_destinations.
     */
    cursor?: itinerary_destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itinerary_destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itinerary_destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itinerary_destinations.
     */
    distinct?: Itinerary_destinationsScalarFieldEnum | Itinerary_destinationsScalarFieldEnum[]
  }

  /**
   * itinerary_destinations findMany
   */
  export type itinerary_destinationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
    /**
     * Filter, which itinerary_destinations to fetch.
     */
    where?: itinerary_destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itinerary_destinations to fetch.
     */
    orderBy?: itinerary_destinationsOrderByWithRelationInput | itinerary_destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing itinerary_destinations.
     */
    cursor?: itinerary_destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itinerary_destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itinerary_destinations.
     */
    skip?: number
    distinct?: Itinerary_destinationsScalarFieldEnum | Itinerary_destinationsScalarFieldEnum[]
  }

  /**
   * itinerary_destinations create
   */
  export type itinerary_destinationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
    /**
     * The data needed to create a itinerary_destinations.
     */
    data?: XOR<itinerary_destinationsCreateInput, itinerary_destinationsUncheckedCreateInput>
  }

  /**
   * itinerary_destinations createMany
   */
  export type itinerary_destinationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many itinerary_destinations.
     */
    data: itinerary_destinationsCreateManyInput | itinerary_destinationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * itinerary_destinations createManyAndReturn
   */
  export type itinerary_destinationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * The data used to create many itinerary_destinations.
     */
    data: itinerary_destinationsCreateManyInput | itinerary_destinationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * itinerary_destinations update
   */
  export type itinerary_destinationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
    /**
     * The data needed to update a itinerary_destinations.
     */
    data: XOR<itinerary_destinationsUpdateInput, itinerary_destinationsUncheckedUpdateInput>
    /**
     * Choose, which itinerary_destinations to update.
     */
    where: itinerary_destinationsWhereUniqueInput
  }

  /**
   * itinerary_destinations updateMany
   */
  export type itinerary_destinationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update itinerary_destinations.
     */
    data: XOR<itinerary_destinationsUpdateManyMutationInput, itinerary_destinationsUncheckedUpdateManyInput>
    /**
     * Filter which itinerary_destinations to update
     */
    where?: itinerary_destinationsWhereInput
    /**
     * Limit how many itinerary_destinations to update.
     */
    limit?: number
  }

  /**
   * itinerary_destinations updateManyAndReturn
   */
  export type itinerary_destinationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * The data used to update itinerary_destinations.
     */
    data: XOR<itinerary_destinationsUpdateManyMutationInput, itinerary_destinationsUncheckedUpdateManyInput>
    /**
     * Filter which itinerary_destinations to update
     */
    where?: itinerary_destinationsWhereInput
    /**
     * Limit how many itinerary_destinations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * itinerary_destinations upsert
   */
  export type itinerary_destinationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
    /**
     * The filter to search for the itinerary_destinations to update in case it exists.
     */
    where: itinerary_destinationsWhereUniqueInput
    /**
     * In case the itinerary_destinations found by the `where` argument doesn't exist, create a new itinerary_destinations with this data.
     */
    create: XOR<itinerary_destinationsCreateInput, itinerary_destinationsUncheckedCreateInput>
    /**
     * In case the itinerary_destinations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itinerary_destinationsUpdateInput, itinerary_destinationsUncheckedUpdateInput>
  }

  /**
   * itinerary_destinations delete
   */
  export type itinerary_destinationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
    /**
     * Filter which itinerary_destinations to delete.
     */
    where: itinerary_destinationsWhereUniqueInput
  }

  /**
   * itinerary_destinations deleteMany
   */
  export type itinerary_destinationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itinerary_destinations to delete
     */
    where?: itinerary_destinationsWhereInput
    /**
     * Limit how many itinerary_destinations to delete.
     */
    limit?: number
  }

  /**
   * itinerary_destinations.destinations
   */
  export type itinerary_destinations$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    where?: destinationsWhereInput
  }

  /**
   * itinerary_destinations.itineraries
   */
  export type itinerary_destinations$itinerariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
    where?: itinerariesWhereInput
  }

  /**
   * itinerary_destinations without action
   */
  export type itinerary_destinationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itinerary_destinations
     */
    select?: itinerary_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itinerary_destinations
     */
    omit?: itinerary_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerary_destinationsInclude<ExtArgs> | null
  }


  /**
   * Model saved_destinations
   */

  export type AggregateSaved_destinations = {
    _count: Saved_destinationsCountAggregateOutputType | null
    _avg: Saved_destinationsAvgAggregateOutputType | null
    _sum: Saved_destinationsSumAggregateOutputType | null
    _min: Saved_destinationsMinAggregateOutputType | null
    _max: Saved_destinationsMaxAggregateOutputType | null
  }

  export type Saved_destinationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    destination_id: number | null
  }

  export type Saved_destinationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    destination_id: number | null
  }

  export type Saved_destinationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    destination_id: number | null
  }

  export type Saved_destinationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    destination_id: number | null
  }

  export type Saved_destinationsCountAggregateOutputType = {
    id: number
    user_id: number
    destination_id: number
    _all: number
  }


  export type Saved_destinationsAvgAggregateInputType = {
    id?: true
    user_id?: true
    destination_id?: true
  }

  export type Saved_destinationsSumAggregateInputType = {
    id?: true
    user_id?: true
    destination_id?: true
  }

  export type Saved_destinationsMinAggregateInputType = {
    id?: true
    user_id?: true
    destination_id?: true
  }

  export type Saved_destinationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    destination_id?: true
  }

  export type Saved_destinationsCountAggregateInputType = {
    id?: true
    user_id?: true
    destination_id?: true
    _all?: true
  }

  export type Saved_destinationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_destinations to aggregate.
     */
    where?: saved_destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_destinations to fetch.
     */
    orderBy?: saved_destinationsOrderByWithRelationInput | saved_destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saved_destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saved_destinations
    **/
    _count?: true | Saved_destinationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Saved_destinationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Saved_destinationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Saved_destinationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Saved_destinationsMaxAggregateInputType
  }

  export type GetSaved_destinationsAggregateType<T extends Saved_destinationsAggregateArgs> = {
        [P in keyof T & keyof AggregateSaved_destinations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaved_destinations[P]>
      : GetScalarType<T[P], AggregateSaved_destinations[P]>
  }




  export type saved_destinationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_destinationsWhereInput
    orderBy?: saved_destinationsOrderByWithAggregationInput | saved_destinationsOrderByWithAggregationInput[]
    by: Saved_destinationsScalarFieldEnum[] | Saved_destinationsScalarFieldEnum
    having?: saved_destinationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Saved_destinationsCountAggregateInputType | true
    _avg?: Saved_destinationsAvgAggregateInputType
    _sum?: Saved_destinationsSumAggregateInputType
    _min?: Saved_destinationsMinAggregateInputType
    _max?: Saved_destinationsMaxAggregateInputType
  }

  export type Saved_destinationsGroupByOutputType = {
    id: number
    user_id: number | null
    destination_id: number | null
    _count: Saved_destinationsCountAggregateOutputType | null
    _avg: Saved_destinationsAvgAggregateOutputType | null
    _sum: Saved_destinationsSumAggregateOutputType | null
    _min: Saved_destinationsMinAggregateOutputType | null
    _max: Saved_destinationsMaxAggregateOutputType | null
  }

  type GetSaved_destinationsGroupByPayload<T extends saved_destinationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Saved_destinationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Saved_destinationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Saved_destinationsGroupByOutputType[P]>
            : GetScalarType<T[P], Saved_destinationsGroupByOutputType[P]>
        }
      >
    >


  export type saved_destinationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    destination_id?: boolean
    destinations?: boolean | saved_destinations$destinationsArgs<ExtArgs>
    users?: boolean | saved_destinations$usersArgs<ExtArgs>
  }, ExtArgs["result"]["saved_destinations"]>

  export type saved_destinationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    destination_id?: boolean
    destinations?: boolean | saved_destinations$destinationsArgs<ExtArgs>
    users?: boolean | saved_destinations$usersArgs<ExtArgs>
  }, ExtArgs["result"]["saved_destinations"]>

  export type saved_destinationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    destination_id?: boolean
    destinations?: boolean | saved_destinations$destinationsArgs<ExtArgs>
    users?: boolean | saved_destinations$usersArgs<ExtArgs>
  }, ExtArgs["result"]["saved_destinations"]>

  export type saved_destinationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    destination_id?: boolean
  }

  export type saved_destinationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "destination_id", ExtArgs["result"]["saved_destinations"]>
  export type saved_destinationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | saved_destinations$destinationsArgs<ExtArgs>
    users?: boolean | saved_destinations$usersArgs<ExtArgs>
  }
  export type saved_destinationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | saved_destinations$destinationsArgs<ExtArgs>
    users?: boolean | saved_destinations$usersArgs<ExtArgs>
  }
  export type saved_destinationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | saved_destinations$destinationsArgs<ExtArgs>
    users?: boolean | saved_destinations$usersArgs<ExtArgs>
  }

  export type $saved_destinationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saved_destinations"
    objects: {
      destinations: Prisma.$destinationsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      destination_id: number | null
    }, ExtArgs["result"]["saved_destinations"]>
    composites: {}
  }

  type saved_destinationsGetPayload<S extends boolean | null | undefined | saved_destinationsDefaultArgs> = $Result.GetResult<Prisma.$saved_destinationsPayload, S>

  type saved_destinationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saved_destinationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Saved_destinationsCountAggregateInputType | true
    }

  export interface saved_destinationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saved_destinations'], meta: { name: 'saved_destinations' } }
    /**
     * Find zero or one Saved_destinations that matches the filter.
     * @param {saved_destinationsFindUniqueArgs} args - Arguments to find a Saved_destinations
     * @example
     * // Get one Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saved_destinationsFindUniqueArgs>(args: SelectSubset<T, saved_destinationsFindUniqueArgs<ExtArgs>>): Prisma__saved_destinationsClient<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saved_destinations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saved_destinationsFindUniqueOrThrowArgs} args - Arguments to find a Saved_destinations
     * @example
     * // Get one Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saved_destinationsFindUniqueOrThrowArgs>(args: SelectSubset<T, saved_destinationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saved_destinationsClient<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_destinationsFindFirstArgs} args - Arguments to find a Saved_destinations
     * @example
     * // Get one Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saved_destinationsFindFirstArgs>(args?: SelectSubset<T, saved_destinationsFindFirstArgs<ExtArgs>>): Prisma__saved_destinationsClient<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_destinations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_destinationsFindFirstOrThrowArgs} args - Arguments to find a Saved_destinations
     * @example
     * // Get one Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saved_destinationsFindFirstOrThrowArgs>(args?: SelectSubset<T, saved_destinationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__saved_destinationsClient<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saved_destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_destinationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.findMany()
     * 
     * // Get first 10 Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saved_destinationsWithIdOnly = await prisma.saved_destinations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends saved_destinationsFindManyArgs>(args?: SelectSubset<T, saved_destinationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saved_destinations.
     * @param {saved_destinationsCreateArgs} args - Arguments to create a Saved_destinations.
     * @example
     * // Create one Saved_destinations
     * const Saved_destinations = await prisma.saved_destinations.create({
     *   data: {
     *     // ... data to create a Saved_destinations
     *   }
     * })
     * 
     */
    create<T extends saved_destinationsCreateArgs>(args: SelectSubset<T, saved_destinationsCreateArgs<ExtArgs>>): Prisma__saved_destinationsClient<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saved_destinations.
     * @param {saved_destinationsCreateManyArgs} args - Arguments to create many Saved_destinations.
     * @example
     * // Create many Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saved_destinationsCreateManyArgs>(args?: SelectSubset<T, saved_destinationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saved_destinations and returns the data saved in the database.
     * @param {saved_destinationsCreateManyAndReturnArgs} args - Arguments to create many Saved_destinations.
     * @example
     * // Create many Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saved_destinations and only return the `id`
     * const saved_destinationsWithIdOnly = await prisma.saved_destinations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends saved_destinationsCreateManyAndReturnArgs>(args?: SelectSubset<T, saved_destinationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Saved_destinations.
     * @param {saved_destinationsDeleteArgs} args - Arguments to delete one Saved_destinations.
     * @example
     * // Delete one Saved_destinations
     * const Saved_destinations = await prisma.saved_destinations.delete({
     *   where: {
     *     // ... filter to delete one Saved_destinations
     *   }
     * })
     * 
     */
    delete<T extends saved_destinationsDeleteArgs>(args: SelectSubset<T, saved_destinationsDeleteArgs<ExtArgs>>): Prisma__saved_destinationsClient<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saved_destinations.
     * @param {saved_destinationsUpdateArgs} args - Arguments to update one Saved_destinations.
     * @example
     * // Update one Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saved_destinationsUpdateArgs>(args: SelectSubset<T, saved_destinationsUpdateArgs<ExtArgs>>): Prisma__saved_destinationsClient<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saved_destinations.
     * @param {saved_destinationsDeleteManyArgs} args - Arguments to filter Saved_destinations to delete.
     * @example
     * // Delete a few Saved_destinations
     * const { count } = await prisma.saved_destinations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saved_destinationsDeleteManyArgs>(args?: SelectSubset<T, saved_destinationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_destinationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saved_destinationsUpdateManyArgs>(args: SelectSubset<T, saved_destinationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_destinations and returns the data updated in the database.
     * @param {saved_destinationsUpdateManyAndReturnArgs} args - Arguments to update many Saved_destinations.
     * @example
     * // Update many Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saved_destinations and only return the `id`
     * const saved_destinationsWithIdOnly = await prisma.saved_destinations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends saved_destinationsUpdateManyAndReturnArgs>(args: SelectSubset<T, saved_destinationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Saved_destinations.
     * @param {saved_destinationsUpsertArgs} args - Arguments to update or create a Saved_destinations.
     * @example
     * // Update or create a Saved_destinations
     * const saved_destinations = await prisma.saved_destinations.upsert({
     *   create: {
     *     // ... data to create a Saved_destinations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_destinations we want to update
     *   }
     * })
     */
    upsert<T extends saved_destinationsUpsertArgs>(args: SelectSubset<T, saved_destinationsUpsertArgs<ExtArgs>>): Prisma__saved_destinationsClient<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saved_destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_destinationsCountArgs} args - Arguments to filter Saved_destinations to count.
     * @example
     * // Count the number of Saved_destinations
     * const count = await prisma.saved_destinations.count({
     *   where: {
     *     // ... the filter for the Saved_destinations we want to count
     *   }
     * })
    **/
    count<T extends saved_destinationsCountArgs>(
      args?: Subset<T, saved_destinationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Saved_destinationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saved_destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_destinationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Saved_destinationsAggregateArgs>(args: Subset<T, Saved_destinationsAggregateArgs>): Prisma.PrismaPromise<GetSaved_destinationsAggregateType<T>>

    /**
     * Group by Saved_destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_destinationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends saved_destinationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saved_destinationsGroupByArgs['orderBy'] }
        : { orderBy?: saved_destinationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, saved_destinationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_destinationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saved_destinations model
   */
  readonly fields: saved_destinationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saved_destinations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saved_destinationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destinations<T extends saved_destinations$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, saved_destinations$destinationsArgs<ExtArgs>>): Prisma__destinationsClient<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends saved_destinations$usersArgs<ExtArgs> = {}>(args?: Subset<T, saved_destinations$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the saved_destinations model
   */
  interface saved_destinationsFieldRefs {
    readonly id: FieldRef<"saved_destinations", 'Int'>
    readonly user_id: FieldRef<"saved_destinations", 'Int'>
    readonly destination_id: FieldRef<"saved_destinations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * saved_destinations findUnique
   */
  export type saved_destinationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
    /**
     * Filter, which saved_destinations to fetch.
     */
    where: saved_destinationsWhereUniqueInput
  }

  /**
   * saved_destinations findUniqueOrThrow
   */
  export type saved_destinationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
    /**
     * Filter, which saved_destinations to fetch.
     */
    where: saved_destinationsWhereUniqueInput
  }

  /**
   * saved_destinations findFirst
   */
  export type saved_destinationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
    /**
     * Filter, which saved_destinations to fetch.
     */
    where?: saved_destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_destinations to fetch.
     */
    orderBy?: saved_destinationsOrderByWithRelationInput | saved_destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_destinations.
     */
    cursor?: saved_destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_destinations.
     */
    distinct?: Saved_destinationsScalarFieldEnum | Saved_destinationsScalarFieldEnum[]
  }

  /**
   * saved_destinations findFirstOrThrow
   */
  export type saved_destinationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
    /**
     * Filter, which saved_destinations to fetch.
     */
    where?: saved_destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_destinations to fetch.
     */
    orderBy?: saved_destinationsOrderByWithRelationInput | saved_destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_destinations.
     */
    cursor?: saved_destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_destinations.
     */
    distinct?: Saved_destinationsScalarFieldEnum | Saved_destinationsScalarFieldEnum[]
  }

  /**
   * saved_destinations findMany
   */
  export type saved_destinationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
    /**
     * Filter, which saved_destinations to fetch.
     */
    where?: saved_destinationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_destinations to fetch.
     */
    orderBy?: saved_destinationsOrderByWithRelationInput | saved_destinationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saved_destinations.
     */
    cursor?: saved_destinationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_destinations.
     */
    skip?: number
    distinct?: Saved_destinationsScalarFieldEnum | Saved_destinationsScalarFieldEnum[]
  }

  /**
   * saved_destinations create
   */
  export type saved_destinationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
    /**
     * The data needed to create a saved_destinations.
     */
    data?: XOR<saved_destinationsCreateInput, saved_destinationsUncheckedCreateInput>
  }

  /**
   * saved_destinations createMany
   */
  export type saved_destinationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saved_destinations.
     */
    data: saved_destinationsCreateManyInput | saved_destinationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * saved_destinations createManyAndReturn
   */
  export type saved_destinationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * The data used to create many saved_destinations.
     */
    data: saved_destinationsCreateManyInput | saved_destinationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * saved_destinations update
   */
  export type saved_destinationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
    /**
     * The data needed to update a saved_destinations.
     */
    data: XOR<saved_destinationsUpdateInput, saved_destinationsUncheckedUpdateInput>
    /**
     * Choose, which saved_destinations to update.
     */
    where: saved_destinationsWhereUniqueInput
  }

  /**
   * saved_destinations updateMany
   */
  export type saved_destinationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saved_destinations.
     */
    data: XOR<saved_destinationsUpdateManyMutationInput, saved_destinationsUncheckedUpdateManyInput>
    /**
     * Filter which saved_destinations to update
     */
    where?: saved_destinationsWhereInput
    /**
     * Limit how many saved_destinations to update.
     */
    limit?: number
  }

  /**
   * saved_destinations updateManyAndReturn
   */
  export type saved_destinationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * The data used to update saved_destinations.
     */
    data: XOR<saved_destinationsUpdateManyMutationInput, saved_destinationsUncheckedUpdateManyInput>
    /**
     * Filter which saved_destinations to update
     */
    where?: saved_destinationsWhereInput
    /**
     * Limit how many saved_destinations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * saved_destinations upsert
   */
  export type saved_destinationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
    /**
     * The filter to search for the saved_destinations to update in case it exists.
     */
    where: saved_destinationsWhereUniqueInput
    /**
     * In case the saved_destinations found by the `where` argument doesn't exist, create a new saved_destinations with this data.
     */
    create: XOR<saved_destinationsCreateInput, saved_destinationsUncheckedCreateInput>
    /**
     * In case the saved_destinations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saved_destinationsUpdateInput, saved_destinationsUncheckedUpdateInput>
  }

  /**
   * saved_destinations delete
   */
  export type saved_destinationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
    /**
     * Filter which saved_destinations to delete.
     */
    where: saved_destinationsWhereUniqueInput
  }

  /**
   * saved_destinations deleteMany
   */
  export type saved_destinationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_destinations to delete
     */
    where?: saved_destinationsWhereInput
    /**
     * Limit how many saved_destinations to delete.
     */
    limit?: number
  }

  /**
   * saved_destinations.destinations
   */
  export type saved_destinations$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    where?: destinationsWhereInput
  }

  /**
   * saved_destinations.users
   */
  export type saved_destinations$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * saved_destinations without action
   */
  export type saved_destinationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password_hash: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    destinations?: boolean | users$destinationsArgs<ExtArgs>
    itineraries?: boolean | users$itinerariesArgs<ExtArgs>
    saved_destinations?: boolean | users$saved_destinationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | users$destinationsArgs<ExtArgs>
    itineraries?: boolean | users$itinerariesArgs<ExtArgs>
    saved_destinations?: boolean | users$saved_destinationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      destinations: Prisma.$destinationsPayload<ExtArgs>[]
      itineraries: Prisma.$itinerariesPayload<ExtArgs>[]
      saved_destinations: Prisma.$saved_destinationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password_hash: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destinations<T extends users$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, users$destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$destinationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itineraries<T extends users$itinerariesArgs<ExtArgs> = {}>(args?: Subset<T, users$itinerariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itinerariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saved_destinations<T extends users$saved_destinationsArgs<ExtArgs> = {}>(args?: Subset<T, users$saved_destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_destinationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.destinations
   */
  export type users$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the destinations
     */
    select?: destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the destinations
     */
    omit?: destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: destinationsInclude<ExtArgs> | null
    where?: destinationsWhereInput
    orderBy?: destinationsOrderByWithRelationInput | destinationsOrderByWithRelationInput[]
    cursor?: destinationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationsScalarFieldEnum | DestinationsScalarFieldEnum[]
  }

  /**
   * users.itineraries
   */
  export type users$itinerariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itineraries
     */
    select?: itinerariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itineraries
     */
    omit?: itinerariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itinerariesInclude<ExtArgs> | null
    where?: itinerariesWhereInput
    orderBy?: itinerariesOrderByWithRelationInput | itinerariesOrderByWithRelationInput[]
    cursor?: itinerariesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItinerariesScalarFieldEnum | ItinerariesScalarFieldEnum[]
  }

  /**
   * users.saved_destinations
   */
  export type users$saved_destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_destinations
     */
    select?: saved_destinationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_destinations
     */
    omit?: saved_destinationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_destinationsInclude<ExtArgs> | null
    where?: saved_destinationsWhereInput
    orderBy?: saved_destinationsOrderByWithRelationInput | saved_destinationsOrderByWithRelationInput[]
    cursor?: saved_destinationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_destinationsScalarFieldEnum | Saved_destinationsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DestinationsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    location: 'location',
    image: 'image',
    category: 'category',
    created_by_id: 'created_by_id'
  };

  export type DestinationsScalarFieldEnum = (typeof DestinationsScalarFieldEnum)[keyof typeof DestinationsScalarFieldEnum]


  export const ItinerariesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    user_id: 'user_id'
  };

  export type ItinerariesScalarFieldEnum = (typeof ItinerariesScalarFieldEnum)[keyof typeof ItinerariesScalarFieldEnum]


  export const Itinerary_destinationsScalarFieldEnum: {
    id: 'id',
    itinerary_id: 'itinerary_id',
    destination_id: 'destination_id'
  };

  export type Itinerary_destinationsScalarFieldEnum = (typeof Itinerary_destinationsScalarFieldEnum)[keyof typeof Itinerary_destinationsScalarFieldEnum]


  export const Saved_destinationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    destination_id: 'destination_id'
  };

  export type Saved_destinationsScalarFieldEnum = (typeof Saved_destinationsScalarFieldEnum)[keyof typeof Saved_destinationsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type destinationsWhereInput = {
    AND?: destinationsWhereInput | destinationsWhereInput[]
    OR?: destinationsWhereInput[]
    NOT?: destinationsWhereInput | destinationsWhereInput[]
    id?: IntFilter<"destinations"> | number
    title?: StringFilter<"destinations"> | string
    description?: StringNullableFilter<"destinations"> | string | null
    location?: StringNullableFilter<"destinations"> | string | null
    image?: StringNullableFilter<"destinations"> | string | null
    category?: StringNullableFilter<"destinations"> | string | null
    created_by_id?: IntNullableFilter<"destinations"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    itinerary_destinations?: Itinerary_destinationsListRelationFilter
    saved_destinations?: Saved_destinationsListRelationFilter
  }

  export type destinationsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    created_by_id?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    itinerary_destinations?: itinerary_destinationsOrderByRelationAggregateInput
    saved_destinations?: saved_destinationsOrderByRelationAggregateInput
  }

  export type destinationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: destinationsWhereInput | destinationsWhereInput[]
    OR?: destinationsWhereInput[]
    NOT?: destinationsWhereInput | destinationsWhereInput[]
    title?: StringFilter<"destinations"> | string
    description?: StringNullableFilter<"destinations"> | string | null
    location?: StringNullableFilter<"destinations"> | string | null
    image?: StringNullableFilter<"destinations"> | string | null
    category?: StringNullableFilter<"destinations"> | string | null
    created_by_id?: IntNullableFilter<"destinations"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    itinerary_destinations?: Itinerary_destinationsListRelationFilter
    saved_destinations?: Saved_destinationsListRelationFilter
  }, "id">

  export type destinationsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    created_by_id?: SortOrderInput | SortOrder
    _count?: destinationsCountOrderByAggregateInput
    _avg?: destinationsAvgOrderByAggregateInput
    _max?: destinationsMaxOrderByAggregateInput
    _min?: destinationsMinOrderByAggregateInput
    _sum?: destinationsSumOrderByAggregateInput
  }

  export type destinationsScalarWhereWithAggregatesInput = {
    AND?: destinationsScalarWhereWithAggregatesInput | destinationsScalarWhereWithAggregatesInput[]
    OR?: destinationsScalarWhereWithAggregatesInput[]
    NOT?: destinationsScalarWhereWithAggregatesInput | destinationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"destinations"> | number
    title?: StringWithAggregatesFilter<"destinations"> | string
    description?: StringNullableWithAggregatesFilter<"destinations"> | string | null
    location?: StringNullableWithAggregatesFilter<"destinations"> | string | null
    image?: StringNullableWithAggregatesFilter<"destinations"> | string | null
    category?: StringNullableWithAggregatesFilter<"destinations"> | string | null
    created_by_id?: IntNullableWithAggregatesFilter<"destinations"> | number | null
  }

  export type itinerariesWhereInput = {
    AND?: itinerariesWhereInput | itinerariesWhereInput[]
    OR?: itinerariesWhereInput[]
    NOT?: itinerariesWhereInput | itinerariesWhereInput[]
    id?: IntFilter<"itineraries"> | number
    title?: StringNullableFilter<"itineraries"> | string | null
    user_id?: IntNullableFilter<"itineraries"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    itinerary_destinations?: Itinerary_destinationsListRelationFilter
  }

  export type itinerariesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    itinerary_destinations?: itinerary_destinationsOrderByRelationAggregateInput
  }

  export type itinerariesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: itinerariesWhereInput | itinerariesWhereInput[]
    OR?: itinerariesWhereInput[]
    NOT?: itinerariesWhereInput | itinerariesWhereInput[]
    title?: StringNullableFilter<"itineraries"> | string | null
    user_id?: IntNullableFilter<"itineraries"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    itinerary_destinations?: Itinerary_destinationsListRelationFilter
  }, "id">

  export type itinerariesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: itinerariesCountOrderByAggregateInput
    _avg?: itinerariesAvgOrderByAggregateInput
    _max?: itinerariesMaxOrderByAggregateInput
    _min?: itinerariesMinOrderByAggregateInput
    _sum?: itinerariesSumOrderByAggregateInput
  }

  export type itinerariesScalarWhereWithAggregatesInput = {
    AND?: itinerariesScalarWhereWithAggregatesInput | itinerariesScalarWhereWithAggregatesInput[]
    OR?: itinerariesScalarWhereWithAggregatesInput[]
    NOT?: itinerariesScalarWhereWithAggregatesInput | itinerariesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"itineraries"> | number
    title?: StringNullableWithAggregatesFilter<"itineraries"> | string | null
    user_id?: IntNullableWithAggregatesFilter<"itineraries"> | number | null
  }

  export type itinerary_destinationsWhereInput = {
    AND?: itinerary_destinationsWhereInput | itinerary_destinationsWhereInput[]
    OR?: itinerary_destinationsWhereInput[]
    NOT?: itinerary_destinationsWhereInput | itinerary_destinationsWhereInput[]
    id?: IntFilter<"itinerary_destinations"> | number
    itinerary_id?: IntNullableFilter<"itinerary_destinations"> | number | null
    destination_id?: IntNullableFilter<"itinerary_destinations"> | number | null
    destinations?: XOR<DestinationsNullableScalarRelationFilter, destinationsWhereInput> | null
    itineraries?: XOR<ItinerariesNullableScalarRelationFilter, itinerariesWhereInput> | null
  }

  export type itinerary_destinationsOrderByWithRelationInput = {
    id?: SortOrder
    itinerary_id?: SortOrderInput | SortOrder
    destination_id?: SortOrderInput | SortOrder
    destinations?: destinationsOrderByWithRelationInput
    itineraries?: itinerariesOrderByWithRelationInput
  }

  export type itinerary_destinationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    itinerary_id_destination_id?: itinerary_destinationsItinerary_idDestination_idCompoundUniqueInput
    AND?: itinerary_destinationsWhereInput | itinerary_destinationsWhereInput[]
    OR?: itinerary_destinationsWhereInput[]
    NOT?: itinerary_destinationsWhereInput | itinerary_destinationsWhereInput[]
    itinerary_id?: IntNullableFilter<"itinerary_destinations"> | number | null
    destination_id?: IntNullableFilter<"itinerary_destinations"> | number | null
    destinations?: XOR<DestinationsNullableScalarRelationFilter, destinationsWhereInput> | null
    itineraries?: XOR<ItinerariesNullableScalarRelationFilter, itinerariesWhereInput> | null
  }, "id" | "itinerary_id_destination_id">

  export type itinerary_destinationsOrderByWithAggregationInput = {
    id?: SortOrder
    itinerary_id?: SortOrderInput | SortOrder
    destination_id?: SortOrderInput | SortOrder
    _count?: itinerary_destinationsCountOrderByAggregateInput
    _avg?: itinerary_destinationsAvgOrderByAggregateInput
    _max?: itinerary_destinationsMaxOrderByAggregateInput
    _min?: itinerary_destinationsMinOrderByAggregateInput
    _sum?: itinerary_destinationsSumOrderByAggregateInput
  }

  export type itinerary_destinationsScalarWhereWithAggregatesInput = {
    AND?: itinerary_destinationsScalarWhereWithAggregatesInput | itinerary_destinationsScalarWhereWithAggregatesInput[]
    OR?: itinerary_destinationsScalarWhereWithAggregatesInput[]
    NOT?: itinerary_destinationsScalarWhereWithAggregatesInput | itinerary_destinationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"itinerary_destinations"> | number
    itinerary_id?: IntNullableWithAggregatesFilter<"itinerary_destinations"> | number | null
    destination_id?: IntNullableWithAggregatesFilter<"itinerary_destinations"> | number | null
  }

  export type saved_destinationsWhereInput = {
    AND?: saved_destinationsWhereInput | saved_destinationsWhereInput[]
    OR?: saved_destinationsWhereInput[]
    NOT?: saved_destinationsWhereInput | saved_destinationsWhereInput[]
    id?: IntFilter<"saved_destinations"> | number
    user_id?: IntNullableFilter<"saved_destinations"> | number | null
    destination_id?: IntNullableFilter<"saved_destinations"> | number | null
    destinations?: XOR<DestinationsNullableScalarRelationFilter, destinationsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type saved_destinationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    destination_id?: SortOrderInput | SortOrder
    destinations?: destinationsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type saved_destinationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_destination_id?: saved_destinationsUser_idDestination_idCompoundUniqueInput
    AND?: saved_destinationsWhereInput | saved_destinationsWhereInput[]
    OR?: saved_destinationsWhereInput[]
    NOT?: saved_destinationsWhereInput | saved_destinationsWhereInput[]
    user_id?: IntNullableFilter<"saved_destinations"> | number | null
    destination_id?: IntNullableFilter<"saved_destinations"> | number | null
    destinations?: XOR<DestinationsNullableScalarRelationFilter, destinationsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "user_id_destination_id">

  export type saved_destinationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    destination_id?: SortOrderInput | SortOrder
    _count?: saved_destinationsCountOrderByAggregateInput
    _avg?: saved_destinationsAvgOrderByAggregateInput
    _max?: saved_destinationsMaxOrderByAggregateInput
    _min?: saved_destinationsMinOrderByAggregateInput
    _sum?: saved_destinationsSumOrderByAggregateInput
  }

  export type saved_destinationsScalarWhereWithAggregatesInput = {
    AND?: saved_destinationsScalarWhereWithAggregatesInput | saved_destinationsScalarWhereWithAggregatesInput[]
    OR?: saved_destinationsScalarWhereWithAggregatesInput[]
    NOT?: saved_destinationsScalarWhereWithAggregatesInput | saved_destinationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"saved_destinations"> | number
    user_id?: IntNullableWithAggregatesFilter<"saved_destinations"> | number | null
    destination_id?: IntNullableWithAggregatesFilter<"saved_destinations"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    destinations?: DestinationsListRelationFilter
    itineraries?: ItinerariesListRelationFilter
    saved_destinations?: Saved_destinationsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    destinations?: destinationsOrderByRelationAggregateInput
    itineraries?: itinerariesOrderByRelationAggregateInput
    saved_destinations?: saved_destinationsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password_hash?: StringFilter<"users"> | string
    destinations?: DestinationsListRelationFilter
    itineraries?: ItinerariesListRelationFilter
    saved_destinations?: Saved_destinationsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
  }

  export type destinationsCreateInput = {
    title: string
    description?: string | null
    location?: string | null
    image?: string | null
    category?: string | null
    users?: usersCreateNestedOneWithoutDestinationsInput
    itinerary_destinations?: itinerary_destinationsCreateNestedManyWithoutDestinationsInput
    saved_destinations?: saved_destinationsCreateNestedManyWithoutDestinationsInput
  }

  export type destinationsUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    image?: string | null
    category?: string | null
    created_by_id?: number | null
    itinerary_destinations?: itinerary_destinationsUncheckedCreateNestedManyWithoutDestinationsInput
    saved_destinations?: saved_destinationsUncheckedCreateNestedManyWithoutDestinationsInput
  }

  export type destinationsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutDestinationsNestedInput
    itinerary_destinations?: itinerary_destinationsUpdateManyWithoutDestinationsNestedInput
    saved_destinations?: saved_destinationsUpdateManyWithoutDestinationsNestedInput
  }

  export type destinationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    itinerary_destinations?: itinerary_destinationsUncheckedUpdateManyWithoutDestinationsNestedInput
    saved_destinations?: saved_destinationsUncheckedUpdateManyWithoutDestinationsNestedInput
  }

  export type destinationsCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    image?: string | null
    category?: string | null
    created_by_id?: number | null
  }

  export type destinationsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type destinationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itinerariesCreateInput = {
    title?: string | null
    users?: usersCreateNestedOneWithoutItinerariesInput
    itinerary_destinations?: itinerary_destinationsCreateNestedManyWithoutItinerariesInput
  }

  export type itinerariesUncheckedCreateInput = {
    id?: number
    title?: string | null
    user_id?: number | null
    itinerary_destinations?: itinerary_destinationsUncheckedCreateNestedManyWithoutItinerariesInput
  }

  export type itinerariesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutItinerariesNestedInput
    itinerary_destinations?: itinerary_destinationsUpdateManyWithoutItinerariesNestedInput
  }

  export type itinerariesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    itinerary_destinations?: itinerary_destinationsUncheckedUpdateManyWithoutItinerariesNestedInput
  }

  export type itinerariesCreateManyInput = {
    id?: number
    title?: string | null
    user_id?: number | null
  }

  export type itinerariesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itinerariesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itinerary_destinationsCreateInput = {
    destinations?: destinationsCreateNestedOneWithoutItinerary_destinationsInput
    itineraries?: itinerariesCreateNestedOneWithoutItinerary_destinationsInput
  }

  export type itinerary_destinationsUncheckedCreateInput = {
    id?: number
    itinerary_id?: number | null
    destination_id?: number | null
  }

  export type itinerary_destinationsUpdateInput = {
    destinations?: destinationsUpdateOneWithoutItinerary_destinationsNestedInput
    itineraries?: itinerariesUpdateOneWithoutItinerary_destinationsNestedInput
  }

  export type itinerary_destinationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itinerary_id?: NullableIntFieldUpdateOperationsInput | number | null
    destination_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itinerary_destinationsCreateManyInput = {
    id?: number
    itinerary_id?: number | null
    destination_id?: number | null
  }

  export type itinerary_destinationsUpdateManyMutationInput = {

  }

  export type itinerary_destinationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itinerary_id?: NullableIntFieldUpdateOperationsInput | number | null
    destination_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type saved_destinationsCreateInput = {
    destinations?: destinationsCreateNestedOneWithoutSaved_destinationsInput
    users?: usersCreateNestedOneWithoutSaved_destinationsInput
  }

  export type saved_destinationsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    destination_id?: number | null
  }

  export type saved_destinationsUpdateInput = {
    destinations?: destinationsUpdateOneWithoutSaved_destinationsNestedInput
    users?: usersUpdateOneWithoutSaved_destinationsNestedInput
  }

  export type saved_destinationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    destination_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type saved_destinationsCreateManyInput = {
    id?: number
    user_id?: number | null
    destination_id?: number | null
  }

  export type saved_destinationsUpdateManyMutationInput = {

  }

  export type saved_destinationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    destination_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    name?: string | null
    email: string
    password_hash: string
    destinations?: destinationsCreateNestedManyWithoutUsersInput
    itineraries?: itinerariesCreateNestedManyWithoutUsersInput
    saved_destinations?: saved_destinationsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    destinations?: destinationsUncheckedCreateNestedManyWithoutUsersInput
    itineraries?: itinerariesUncheckedCreateNestedManyWithoutUsersInput
    saved_destinations?: saved_destinationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    destinations?: destinationsUpdateManyWithoutUsersNestedInput
    itineraries?: itinerariesUpdateManyWithoutUsersNestedInput
    saved_destinations?: saved_destinationsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    destinations?: destinationsUncheckedUpdateManyWithoutUsersNestedInput
    itineraries?: itinerariesUncheckedUpdateManyWithoutUsersNestedInput
    saved_destinations?: saved_destinationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type Itinerary_destinationsListRelationFilter = {
    every?: itinerary_destinationsWhereInput
    some?: itinerary_destinationsWhereInput
    none?: itinerary_destinationsWhereInput
  }

  export type Saved_destinationsListRelationFilter = {
    every?: saved_destinationsWhereInput
    some?: saved_destinationsWhereInput
    none?: saved_destinationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type itinerary_destinationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type saved_destinationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type destinationsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    image?: SortOrder
    category?: SortOrder
    created_by_id?: SortOrder
  }

  export type destinationsAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by_id?: SortOrder
  }

  export type destinationsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    image?: SortOrder
    category?: SortOrder
    created_by_id?: SortOrder
  }

  export type destinationsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    image?: SortOrder
    category?: SortOrder
    created_by_id?: SortOrder
  }

  export type destinationsSumOrderByAggregateInput = {
    id?: SortOrder
    created_by_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type itinerariesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
  }

  export type itinerariesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type itinerariesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
  }

  export type itinerariesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    user_id?: SortOrder
  }

  export type itinerariesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DestinationsNullableScalarRelationFilter = {
    is?: destinationsWhereInput | null
    isNot?: destinationsWhereInput | null
  }

  export type ItinerariesNullableScalarRelationFilter = {
    is?: itinerariesWhereInput | null
    isNot?: itinerariesWhereInput | null
  }

  export type itinerary_destinationsItinerary_idDestination_idCompoundUniqueInput = {
    itinerary_id: number
    destination_id: number
  }

  export type itinerary_destinationsCountOrderByAggregateInput = {
    id?: SortOrder
    itinerary_id?: SortOrder
    destination_id?: SortOrder
  }

  export type itinerary_destinationsAvgOrderByAggregateInput = {
    id?: SortOrder
    itinerary_id?: SortOrder
    destination_id?: SortOrder
  }

  export type itinerary_destinationsMaxOrderByAggregateInput = {
    id?: SortOrder
    itinerary_id?: SortOrder
    destination_id?: SortOrder
  }

  export type itinerary_destinationsMinOrderByAggregateInput = {
    id?: SortOrder
    itinerary_id?: SortOrder
    destination_id?: SortOrder
  }

  export type itinerary_destinationsSumOrderByAggregateInput = {
    id?: SortOrder
    itinerary_id?: SortOrder
    destination_id?: SortOrder
  }

  export type saved_destinationsUser_idDestination_idCompoundUniqueInput = {
    user_id: number
    destination_id: number
  }

  export type saved_destinationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    destination_id?: SortOrder
  }

  export type saved_destinationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    destination_id?: SortOrder
  }

  export type saved_destinationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    destination_id?: SortOrder
  }

  export type saved_destinationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    destination_id?: SortOrder
  }

  export type saved_destinationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    destination_id?: SortOrder
  }

  export type DestinationsListRelationFilter = {
    every?: destinationsWhereInput
    some?: destinationsWhereInput
    none?: destinationsWhereInput
  }

  export type ItinerariesListRelationFilter = {
    every?: itinerariesWhereInput
    some?: itinerariesWhereInput
    none?: itinerariesWhereInput
  }

  export type destinationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type itinerariesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCreateNestedOneWithoutDestinationsInput = {
    create?: XOR<usersCreateWithoutDestinationsInput, usersUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDestinationsInput
    connect?: usersWhereUniqueInput
  }

  export type itinerary_destinationsCreateNestedManyWithoutDestinationsInput = {
    create?: XOR<itinerary_destinationsCreateWithoutDestinationsInput, itinerary_destinationsUncheckedCreateWithoutDestinationsInput> | itinerary_destinationsCreateWithoutDestinationsInput[] | itinerary_destinationsUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: itinerary_destinationsCreateOrConnectWithoutDestinationsInput | itinerary_destinationsCreateOrConnectWithoutDestinationsInput[]
    createMany?: itinerary_destinationsCreateManyDestinationsInputEnvelope
    connect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
  }

  export type saved_destinationsCreateNestedManyWithoutDestinationsInput = {
    create?: XOR<saved_destinationsCreateWithoutDestinationsInput, saved_destinationsUncheckedCreateWithoutDestinationsInput> | saved_destinationsCreateWithoutDestinationsInput[] | saved_destinationsUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: saved_destinationsCreateOrConnectWithoutDestinationsInput | saved_destinationsCreateOrConnectWithoutDestinationsInput[]
    createMany?: saved_destinationsCreateManyDestinationsInputEnvelope
    connect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
  }

  export type itinerary_destinationsUncheckedCreateNestedManyWithoutDestinationsInput = {
    create?: XOR<itinerary_destinationsCreateWithoutDestinationsInput, itinerary_destinationsUncheckedCreateWithoutDestinationsInput> | itinerary_destinationsCreateWithoutDestinationsInput[] | itinerary_destinationsUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: itinerary_destinationsCreateOrConnectWithoutDestinationsInput | itinerary_destinationsCreateOrConnectWithoutDestinationsInput[]
    createMany?: itinerary_destinationsCreateManyDestinationsInputEnvelope
    connect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
  }

  export type saved_destinationsUncheckedCreateNestedManyWithoutDestinationsInput = {
    create?: XOR<saved_destinationsCreateWithoutDestinationsInput, saved_destinationsUncheckedCreateWithoutDestinationsInput> | saved_destinationsCreateWithoutDestinationsInput[] | saved_destinationsUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: saved_destinationsCreateOrConnectWithoutDestinationsInput | saved_destinationsCreateOrConnectWithoutDestinationsInput[]
    createMany?: saved_destinationsCreateManyDestinationsInputEnvelope
    connect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneWithoutDestinationsNestedInput = {
    create?: XOR<usersCreateWithoutDestinationsInput, usersUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutDestinationsInput
    upsert?: usersUpsertWithoutDestinationsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDestinationsInput, usersUpdateWithoutDestinationsInput>, usersUncheckedUpdateWithoutDestinationsInput>
  }

  export type itinerary_destinationsUpdateManyWithoutDestinationsNestedInput = {
    create?: XOR<itinerary_destinationsCreateWithoutDestinationsInput, itinerary_destinationsUncheckedCreateWithoutDestinationsInput> | itinerary_destinationsCreateWithoutDestinationsInput[] | itinerary_destinationsUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: itinerary_destinationsCreateOrConnectWithoutDestinationsInput | itinerary_destinationsCreateOrConnectWithoutDestinationsInput[]
    upsert?: itinerary_destinationsUpsertWithWhereUniqueWithoutDestinationsInput | itinerary_destinationsUpsertWithWhereUniqueWithoutDestinationsInput[]
    createMany?: itinerary_destinationsCreateManyDestinationsInputEnvelope
    set?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    disconnect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    delete?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    connect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    update?: itinerary_destinationsUpdateWithWhereUniqueWithoutDestinationsInput | itinerary_destinationsUpdateWithWhereUniqueWithoutDestinationsInput[]
    updateMany?: itinerary_destinationsUpdateManyWithWhereWithoutDestinationsInput | itinerary_destinationsUpdateManyWithWhereWithoutDestinationsInput[]
    deleteMany?: itinerary_destinationsScalarWhereInput | itinerary_destinationsScalarWhereInput[]
  }

  export type saved_destinationsUpdateManyWithoutDestinationsNestedInput = {
    create?: XOR<saved_destinationsCreateWithoutDestinationsInput, saved_destinationsUncheckedCreateWithoutDestinationsInput> | saved_destinationsCreateWithoutDestinationsInput[] | saved_destinationsUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: saved_destinationsCreateOrConnectWithoutDestinationsInput | saved_destinationsCreateOrConnectWithoutDestinationsInput[]
    upsert?: saved_destinationsUpsertWithWhereUniqueWithoutDestinationsInput | saved_destinationsUpsertWithWhereUniqueWithoutDestinationsInput[]
    createMany?: saved_destinationsCreateManyDestinationsInputEnvelope
    set?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    disconnect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    delete?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    connect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    update?: saved_destinationsUpdateWithWhereUniqueWithoutDestinationsInput | saved_destinationsUpdateWithWhereUniqueWithoutDestinationsInput[]
    updateMany?: saved_destinationsUpdateManyWithWhereWithoutDestinationsInput | saved_destinationsUpdateManyWithWhereWithoutDestinationsInput[]
    deleteMany?: saved_destinationsScalarWhereInput | saved_destinationsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type itinerary_destinationsUncheckedUpdateManyWithoutDestinationsNestedInput = {
    create?: XOR<itinerary_destinationsCreateWithoutDestinationsInput, itinerary_destinationsUncheckedCreateWithoutDestinationsInput> | itinerary_destinationsCreateWithoutDestinationsInput[] | itinerary_destinationsUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: itinerary_destinationsCreateOrConnectWithoutDestinationsInput | itinerary_destinationsCreateOrConnectWithoutDestinationsInput[]
    upsert?: itinerary_destinationsUpsertWithWhereUniqueWithoutDestinationsInput | itinerary_destinationsUpsertWithWhereUniqueWithoutDestinationsInput[]
    createMany?: itinerary_destinationsCreateManyDestinationsInputEnvelope
    set?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    disconnect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    delete?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    connect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    update?: itinerary_destinationsUpdateWithWhereUniqueWithoutDestinationsInput | itinerary_destinationsUpdateWithWhereUniqueWithoutDestinationsInput[]
    updateMany?: itinerary_destinationsUpdateManyWithWhereWithoutDestinationsInput | itinerary_destinationsUpdateManyWithWhereWithoutDestinationsInput[]
    deleteMany?: itinerary_destinationsScalarWhereInput | itinerary_destinationsScalarWhereInput[]
  }

  export type saved_destinationsUncheckedUpdateManyWithoutDestinationsNestedInput = {
    create?: XOR<saved_destinationsCreateWithoutDestinationsInput, saved_destinationsUncheckedCreateWithoutDestinationsInput> | saved_destinationsCreateWithoutDestinationsInput[] | saved_destinationsUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: saved_destinationsCreateOrConnectWithoutDestinationsInput | saved_destinationsCreateOrConnectWithoutDestinationsInput[]
    upsert?: saved_destinationsUpsertWithWhereUniqueWithoutDestinationsInput | saved_destinationsUpsertWithWhereUniqueWithoutDestinationsInput[]
    createMany?: saved_destinationsCreateManyDestinationsInputEnvelope
    set?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    disconnect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    delete?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    connect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    update?: saved_destinationsUpdateWithWhereUniqueWithoutDestinationsInput | saved_destinationsUpdateWithWhereUniqueWithoutDestinationsInput[]
    updateMany?: saved_destinationsUpdateManyWithWhereWithoutDestinationsInput | saved_destinationsUpdateManyWithWhereWithoutDestinationsInput[]
    deleteMany?: saved_destinationsScalarWhereInput | saved_destinationsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutItinerariesInput = {
    create?: XOR<usersCreateWithoutItinerariesInput, usersUncheckedCreateWithoutItinerariesInput>
    connectOrCreate?: usersCreateOrConnectWithoutItinerariesInput
    connect?: usersWhereUniqueInput
  }

  export type itinerary_destinationsCreateNestedManyWithoutItinerariesInput = {
    create?: XOR<itinerary_destinationsCreateWithoutItinerariesInput, itinerary_destinationsUncheckedCreateWithoutItinerariesInput> | itinerary_destinationsCreateWithoutItinerariesInput[] | itinerary_destinationsUncheckedCreateWithoutItinerariesInput[]
    connectOrCreate?: itinerary_destinationsCreateOrConnectWithoutItinerariesInput | itinerary_destinationsCreateOrConnectWithoutItinerariesInput[]
    createMany?: itinerary_destinationsCreateManyItinerariesInputEnvelope
    connect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
  }

  export type itinerary_destinationsUncheckedCreateNestedManyWithoutItinerariesInput = {
    create?: XOR<itinerary_destinationsCreateWithoutItinerariesInput, itinerary_destinationsUncheckedCreateWithoutItinerariesInput> | itinerary_destinationsCreateWithoutItinerariesInput[] | itinerary_destinationsUncheckedCreateWithoutItinerariesInput[]
    connectOrCreate?: itinerary_destinationsCreateOrConnectWithoutItinerariesInput | itinerary_destinationsCreateOrConnectWithoutItinerariesInput[]
    createMany?: itinerary_destinationsCreateManyItinerariesInputEnvelope
    connect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
  }

  export type usersUpdateOneWithoutItinerariesNestedInput = {
    create?: XOR<usersCreateWithoutItinerariesInput, usersUncheckedCreateWithoutItinerariesInput>
    connectOrCreate?: usersCreateOrConnectWithoutItinerariesInput
    upsert?: usersUpsertWithoutItinerariesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutItinerariesInput, usersUpdateWithoutItinerariesInput>, usersUncheckedUpdateWithoutItinerariesInput>
  }

  export type itinerary_destinationsUpdateManyWithoutItinerariesNestedInput = {
    create?: XOR<itinerary_destinationsCreateWithoutItinerariesInput, itinerary_destinationsUncheckedCreateWithoutItinerariesInput> | itinerary_destinationsCreateWithoutItinerariesInput[] | itinerary_destinationsUncheckedCreateWithoutItinerariesInput[]
    connectOrCreate?: itinerary_destinationsCreateOrConnectWithoutItinerariesInput | itinerary_destinationsCreateOrConnectWithoutItinerariesInput[]
    upsert?: itinerary_destinationsUpsertWithWhereUniqueWithoutItinerariesInput | itinerary_destinationsUpsertWithWhereUniqueWithoutItinerariesInput[]
    createMany?: itinerary_destinationsCreateManyItinerariesInputEnvelope
    set?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    disconnect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    delete?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    connect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    update?: itinerary_destinationsUpdateWithWhereUniqueWithoutItinerariesInput | itinerary_destinationsUpdateWithWhereUniqueWithoutItinerariesInput[]
    updateMany?: itinerary_destinationsUpdateManyWithWhereWithoutItinerariesInput | itinerary_destinationsUpdateManyWithWhereWithoutItinerariesInput[]
    deleteMany?: itinerary_destinationsScalarWhereInput | itinerary_destinationsScalarWhereInput[]
  }

  export type itinerary_destinationsUncheckedUpdateManyWithoutItinerariesNestedInput = {
    create?: XOR<itinerary_destinationsCreateWithoutItinerariesInput, itinerary_destinationsUncheckedCreateWithoutItinerariesInput> | itinerary_destinationsCreateWithoutItinerariesInput[] | itinerary_destinationsUncheckedCreateWithoutItinerariesInput[]
    connectOrCreate?: itinerary_destinationsCreateOrConnectWithoutItinerariesInput | itinerary_destinationsCreateOrConnectWithoutItinerariesInput[]
    upsert?: itinerary_destinationsUpsertWithWhereUniqueWithoutItinerariesInput | itinerary_destinationsUpsertWithWhereUniqueWithoutItinerariesInput[]
    createMany?: itinerary_destinationsCreateManyItinerariesInputEnvelope
    set?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    disconnect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    delete?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    connect?: itinerary_destinationsWhereUniqueInput | itinerary_destinationsWhereUniqueInput[]
    update?: itinerary_destinationsUpdateWithWhereUniqueWithoutItinerariesInput | itinerary_destinationsUpdateWithWhereUniqueWithoutItinerariesInput[]
    updateMany?: itinerary_destinationsUpdateManyWithWhereWithoutItinerariesInput | itinerary_destinationsUpdateManyWithWhereWithoutItinerariesInput[]
    deleteMany?: itinerary_destinationsScalarWhereInput | itinerary_destinationsScalarWhereInput[]
  }

  export type destinationsCreateNestedOneWithoutItinerary_destinationsInput = {
    create?: XOR<destinationsCreateWithoutItinerary_destinationsInput, destinationsUncheckedCreateWithoutItinerary_destinationsInput>
    connectOrCreate?: destinationsCreateOrConnectWithoutItinerary_destinationsInput
    connect?: destinationsWhereUniqueInput
  }

  export type itinerariesCreateNestedOneWithoutItinerary_destinationsInput = {
    create?: XOR<itinerariesCreateWithoutItinerary_destinationsInput, itinerariesUncheckedCreateWithoutItinerary_destinationsInput>
    connectOrCreate?: itinerariesCreateOrConnectWithoutItinerary_destinationsInput
    connect?: itinerariesWhereUniqueInput
  }

  export type destinationsUpdateOneWithoutItinerary_destinationsNestedInput = {
    create?: XOR<destinationsCreateWithoutItinerary_destinationsInput, destinationsUncheckedCreateWithoutItinerary_destinationsInput>
    connectOrCreate?: destinationsCreateOrConnectWithoutItinerary_destinationsInput
    upsert?: destinationsUpsertWithoutItinerary_destinationsInput
    disconnect?: destinationsWhereInput | boolean
    delete?: destinationsWhereInput | boolean
    connect?: destinationsWhereUniqueInput
    update?: XOR<XOR<destinationsUpdateToOneWithWhereWithoutItinerary_destinationsInput, destinationsUpdateWithoutItinerary_destinationsInput>, destinationsUncheckedUpdateWithoutItinerary_destinationsInput>
  }

  export type itinerariesUpdateOneWithoutItinerary_destinationsNestedInput = {
    create?: XOR<itinerariesCreateWithoutItinerary_destinationsInput, itinerariesUncheckedCreateWithoutItinerary_destinationsInput>
    connectOrCreate?: itinerariesCreateOrConnectWithoutItinerary_destinationsInput
    upsert?: itinerariesUpsertWithoutItinerary_destinationsInput
    disconnect?: itinerariesWhereInput | boolean
    delete?: itinerariesWhereInput | boolean
    connect?: itinerariesWhereUniqueInput
    update?: XOR<XOR<itinerariesUpdateToOneWithWhereWithoutItinerary_destinationsInput, itinerariesUpdateWithoutItinerary_destinationsInput>, itinerariesUncheckedUpdateWithoutItinerary_destinationsInput>
  }

  export type destinationsCreateNestedOneWithoutSaved_destinationsInput = {
    create?: XOR<destinationsCreateWithoutSaved_destinationsInput, destinationsUncheckedCreateWithoutSaved_destinationsInput>
    connectOrCreate?: destinationsCreateOrConnectWithoutSaved_destinationsInput
    connect?: destinationsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSaved_destinationsInput = {
    create?: XOR<usersCreateWithoutSaved_destinationsInput, usersUncheckedCreateWithoutSaved_destinationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSaved_destinationsInput
    connect?: usersWhereUniqueInput
  }

  export type destinationsUpdateOneWithoutSaved_destinationsNestedInput = {
    create?: XOR<destinationsCreateWithoutSaved_destinationsInput, destinationsUncheckedCreateWithoutSaved_destinationsInput>
    connectOrCreate?: destinationsCreateOrConnectWithoutSaved_destinationsInput
    upsert?: destinationsUpsertWithoutSaved_destinationsInput
    disconnect?: destinationsWhereInput | boolean
    delete?: destinationsWhereInput | boolean
    connect?: destinationsWhereUniqueInput
    update?: XOR<XOR<destinationsUpdateToOneWithWhereWithoutSaved_destinationsInput, destinationsUpdateWithoutSaved_destinationsInput>, destinationsUncheckedUpdateWithoutSaved_destinationsInput>
  }

  export type usersUpdateOneWithoutSaved_destinationsNestedInput = {
    create?: XOR<usersCreateWithoutSaved_destinationsInput, usersUncheckedCreateWithoutSaved_destinationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSaved_destinationsInput
    upsert?: usersUpsertWithoutSaved_destinationsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSaved_destinationsInput, usersUpdateWithoutSaved_destinationsInput>, usersUncheckedUpdateWithoutSaved_destinationsInput>
  }

  export type destinationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<destinationsCreateWithoutUsersInput, destinationsUncheckedCreateWithoutUsersInput> | destinationsCreateWithoutUsersInput[] | destinationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: destinationsCreateOrConnectWithoutUsersInput | destinationsCreateOrConnectWithoutUsersInput[]
    createMany?: destinationsCreateManyUsersInputEnvelope
    connect?: destinationsWhereUniqueInput | destinationsWhereUniqueInput[]
  }

  export type itinerariesCreateNestedManyWithoutUsersInput = {
    create?: XOR<itinerariesCreateWithoutUsersInput, itinerariesUncheckedCreateWithoutUsersInput> | itinerariesCreateWithoutUsersInput[] | itinerariesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: itinerariesCreateOrConnectWithoutUsersInput | itinerariesCreateOrConnectWithoutUsersInput[]
    createMany?: itinerariesCreateManyUsersInputEnvelope
    connect?: itinerariesWhereUniqueInput | itinerariesWhereUniqueInput[]
  }

  export type saved_destinationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<saved_destinationsCreateWithoutUsersInput, saved_destinationsUncheckedCreateWithoutUsersInput> | saved_destinationsCreateWithoutUsersInput[] | saved_destinationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_destinationsCreateOrConnectWithoutUsersInput | saved_destinationsCreateOrConnectWithoutUsersInput[]
    createMany?: saved_destinationsCreateManyUsersInputEnvelope
    connect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
  }

  export type destinationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<destinationsCreateWithoutUsersInput, destinationsUncheckedCreateWithoutUsersInput> | destinationsCreateWithoutUsersInput[] | destinationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: destinationsCreateOrConnectWithoutUsersInput | destinationsCreateOrConnectWithoutUsersInput[]
    createMany?: destinationsCreateManyUsersInputEnvelope
    connect?: destinationsWhereUniqueInput | destinationsWhereUniqueInput[]
  }

  export type itinerariesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<itinerariesCreateWithoutUsersInput, itinerariesUncheckedCreateWithoutUsersInput> | itinerariesCreateWithoutUsersInput[] | itinerariesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: itinerariesCreateOrConnectWithoutUsersInput | itinerariesCreateOrConnectWithoutUsersInput[]
    createMany?: itinerariesCreateManyUsersInputEnvelope
    connect?: itinerariesWhereUniqueInput | itinerariesWhereUniqueInput[]
  }

  export type saved_destinationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<saved_destinationsCreateWithoutUsersInput, saved_destinationsUncheckedCreateWithoutUsersInput> | saved_destinationsCreateWithoutUsersInput[] | saved_destinationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_destinationsCreateOrConnectWithoutUsersInput | saved_destinationsCreateOrConnectWithoutUsersInput[]
    createMany?: saved_destinationsCreateManyUsersInputEnvelope
    connect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
  }

  export type destinationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<destinationsCreateWithoutUsersInput, destinationsUncheckedCreateWithoutUsersInput> | destinationsCreateWithoutUsersInput[] | destinationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: destinationsCreateOrConnectWithoutUsersInput | destinationsCreateOrConnectWithoutUsersInput[]
    upsert?: destinationsUpsertWithWhereUniqueWithoutUsersInput | destinationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: destinationsCreateManyUsersInputEnvelope
    set?: destinationsWhereUniqueInput | destinationsWhereUniqueInput[]
    disconnect?: destinationsWhereUniqueInput | destinationsWhereUniqueInput[]
    delete?: destinationsWhereUniqueInput | destinationsWhereUniqueInput[]
    connect?: destinationsWhereUniqueInput | destinationsWhereUniqueInput[]
    update?: destinationsUpdateWithWhereUniqueWithoutUsersInput | destinationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: destinationsUpdateManyWithWhereWithoutUsersInput | destinationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: destinationsScalarWhereInput | destinationsScalarWhereInput[]
  }

  export type itinerariesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<itinerariesCreateWithoutUsersInput, itinerariesUncheckedCreateWithoutUsersInput> | itinerariesCreateWithoutUsersInput[] | itinerariesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: itinerariesCreateOrConnectWithoutUsersInput | itinerariesCreateOrConnectWithoutUsersInput[]
    upsert?: itinerariesUpsertWithWhereUniqueWithoutUsersInput | itinerariesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: itinerariesCreateManyUsersInputEnvelope
    set?: itinerariesWhereUniqueInput | itinerariesWhereUniqueInput[]
    disconnect?: itinerariesWhereUniqueInput | itinerariesWhereUniqueInput[]
    delete?: itinerariesWhereUniqueInput | itinerariesWhereUniqueInput[]
    connect?: itinerariesWhereUniqueInput | itinerariesWhereUniqueInput[]
    update?: itinerariesUpdateWithWhereUniqueWithoutUsersInput | itinerariesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: itinerariesUpdateManyWithWhereWithoutUsersInput | itinerariesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: itinerariesScalarWhereInput | itinerariesScalarWhereInput[]
  }

  export type saved_destinationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<saved_destinationsCreateWithoutUsersInput, saved_destinationsUncheckedCreateWithoutUsersInput> | saved_destinationsCreateWithoutUsersInput[] | saved_destinationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_destinationsCreateOrConnectWithoutUsersInput | saved_destinationsCreateOrConnectWithoutUsersInput[]
    upsert?: saved_destinationsUpsertWithWhereUniqueWithoutUsersInput | saved_destinationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: saved_destinationsCreateManyUsersInputEnvelope
    set?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    disconnect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    delete?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    connect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    update?: saved_destinationsUpdateWithWhereUniqueWithoutUsersInput | saved_destinationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: saved_destinationsUpdateManyWithWhereWithoutUsersInput | saved_destinationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: saved_destinationsScalarWhereInput | saved_destinationsScalarWhereInput[]
  }

  export type destinationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<destinationsCreateWithoutUsersInput, destinationsUncheckedCreateWithoutUsersInput> | destinationsCreateWithoutUsersInput[] | destinationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: destinationsCreateOrConnectWithoutUsersInput | destinationsCreateOrConnectWithoutUsersInput[]
    upsert?: destinationsUpsertWithWhereUniqueWithoutUsersInput | destinationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: destinationsCreateManyUsersInputEnvelope
    set?: destinationsWhereUniqueInput | destinationsWhereUniqueInput[]
    disconnect?: destinationsWhereUniqueInput | destinationsWhereUniqueInput[]
    delete?: destinationsWhereUniqueInput | destinationsWhereUniqueInput[]
    connect?: destinationsWhereUniqueInput | destinationsWhereUniqueInput[]
    update?: destinationsUpdateWithWhereUniqueWithoutUsersInput | destinationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: destinationsUpdateManyWithWhereWithoutUsersInput | destinationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: destinationsScalarWhereInput | destinationsScalarWhereInput[]
  }

  export type itinerariesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<itinerariesCreateWithoutUsersInput, itinerariesUncheckedCreateWithoutUsersInput> | itinerariesCreateWithoutUsersInput[] | itinerariesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: itinerariesCreateOrConnectWithoutUsersInput | itinerariesCreateOrConnectWithoutUsersInput[]
    upsert?: itinerariesUpsertWithWhereUniqueWithoutUsersInput | itinerariesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: itinerariesCreateManyUsersInputEnvelope
    set?: itinerariesWhereUniqueInput | itinerariesWhereUniqueInput[]
    disconnect?: itinerariesWhereUniqueInput | itinerariesWhereUniqueInput[]
    delete?: itinerariesWhereUniqueInput | itinerariesWhereUniqueInput[]
    connect?: itinerariesWhereUniqueInput | itinerariesWhereUniqueInput[]
    update?: itinerariesUpdateWithWhereUniqueWithoutUsersInput | itinerariesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: itinerariesUpdateManyWithWhereWithoutUsersInput | itinerariesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: itinerariesScalarWhereInput | itinerariesScalarWhereInput[]
  }

  export type saved_destinationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<saved_destinationsCreateWithoutUsersInput, saved_destinationsUncheckedCreateWithoutUsersInput> | saved_destinationsCreateWithoutUsersInput[] | saved_destinationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_destinationsCreateOrConnectWithoutUsersInput | saved_destinationsCreateOrConnectWithoutUsersInput[]
    upsert?: saved_destinationsUpsertWithWhereUniqueWithoutUsersInput | saved_destinationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: saved_destinationsCreateManyUsersInputEnvelope
    set?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    disconnect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    delete?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    connect?: saved_destinationsWhereUniqueInput | saved_destinationsWhereUniqueInput[]
    update?: saved_destinationsUpdateWithWhereUniqueWithoutUsersInput | saved_destinationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: saved_destinationsUpdateManyWithWhereWithoutUsersInput | saved_destinationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: saved_destinationsScalarWhereInput | saved_destinationsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usersCreateWithoutDestinationsInput = {
    name?: string | null
    email: string
    password_hash: string
    itineraries?: itinerariesCreateNestedManyWithoutUsersInput
    saved_destinations?: saved_destinationsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDestinationsInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    itineraries?: itinerariesUncheckedCreateNestedManyWithoutUsersInput
    saved_destinations?: saved_destinationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDestinationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDestinationsInput, usersUncheckedCreateWithoutDestinationsInput>
  }

  export type itinerary_destinationsCreateWithoutDestinationsInput = {
    itineraries?: itinerariesCreateNestedOneWithoutItinerary_destinationsInput
  }

  export type itinerary_destinationsUncheckedCreateWithoutDestinationsInput = {
    id?: number
    itinerary_id?: number | null
  }

  export type itinerary_destinationsCreateOrConnectWithoutDestinationsInput = {
    where: itinerary_destinationsWhereUniqueInput
    create: XOR<itinerary_destinationsCreateWithoutDestinationsInput, itinerary_destinationsUncheckedCreateWithoutDestinationsInput>
  }

  export type itinerary_destinationsCreateManyDestinationsInputEnvelope = {
    data: itinerary_destinationsCreateManyDestinationsInput | itinerary_destinationsCreateManyDestinationsInput[]
    skipDuplicates?: boolean
  }

  export type saved_destinationsCreateWithoutDestinationsInput = {
    users?: usersCreateNestedOneWithoutSaved_destinationsInput
  }

  export type saved_destinationsUncheckedCreateWithoutDestinationsInput = {
    id?: number
    user_id?: number | null
  }

  export type saved_destinationsCreateOrConnectWithoutDestinationsInput = {
    where: saved_destinationsWhereUniqueInput
    create: XOR<saved_destinationsCreateWithoutDestinationsInput, saved_destinationsUncheckedCreateWithoutDestinationsInput>
  }

  export type saved_destinationsCreateManyDestinationsInputEnvelope = {
    data: saved_destinationsCreateManyDestinationsInput | saved_destinationsCreateManyDestinationsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutDestinationsInput = {
    update: XOR<usersUpdateWithoutDestinationsInput, usersUncheckedUpdateWithoutDestinationsInput>
    create: XOR<usersCreateWithoutDestinationsInput, usersUncheckedCreateWithoutDestinationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDestinationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDestinationsInput, usersUncheckedUpdateWithoutDestinationsInput>
  }

  export type usersUpdateWithoutDestinationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    itineraries?: itinerariesUpdateManyWithoutUsersNestedInput
    saved_destinations?: saved_destinationsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDestinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    itineraries?: itinerariesUncheckedUpdateManyWithoutUsersNestedInput
    saved_destinations?: saved_destinationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type itinerary_destinationsUpsertWithWhereUniqueWithoutDestinationsInput = {
    where: itinerary_destinationsWhereUniqueInput
    update: XOR<itinerary_destinationsUpdateWithoutDestinationsInput, itinerary_destinationsUncheckedUpdateWithoutDestinationsInput>
    create: XOR<itinerary_destinationsCreateWithoutDestinationsInput, itinerary_destinationsUncheckedCreateWithoutDestinationsInput>
  }

  export type itinerary_destinationsUpdateWithWhereUniqueWithoutDestinationsInput = {
    where: itinerary_destinationsWhereUniqueInput
    data: XOR<itinerary_destinationsUpdateWithoutDestinationsInput, itinerary_destinationsUncheckedUpdateWithoutDestinationsInput>
  }

  export type itinerary_destinationsUpdateManyWithWhereWithoutDestinationsInput = {
    where: itinerary_destinationsScalarWhereInput
    data: XOR<itinerary_destinationsUpdateManyMutationInput, itinerary_destinationsUncheckedUpdateManyWithoutDestinationsInput>
  }

  export type itinerary_destinationsScalarWhereInput = {
    AND?: itinerary_destinationsScalarWhereInput | itinerary_destinationsScalarWhereInput[]
    OR?: itinerary_destinationsScalarWhereInput[]
    NOT?: itinerary_destinationsScalarWhereInput | itinerary_destinationsScalarWhereInput[]
    id?: IntFilter<"itinerary_destinations"> | number
    itinerary_id?: IntNullableFilter<"itinerary_destinations"> | number | null
    destination_id?: IntNullableFilter<"itinerary_destinations"> | number | null
  }

  export type saved_destinationsUpsertWithWhereUniqueWithoutDestinationsInput = {
    where: saved_destinationsWhereUniqueInput
    update: XOR<saved_destinationsUpdateWithoutDestinationsInput, saved_destinationsUncheckedUpdateWithoutDestinationsInput>
    create: XOR<saved_destinationsCreateWithoutDestinationsInput, saved_destinationsUncheckedCreateWithoutDestinationsInput>
  }

  export type saved_destinationsUpdateWithWhereUniqueWithoutDestinationsInput = {
    where: saved_destinationsWhereUniqueInput
    data: XOR<saved_destinationsUpdateWithoutDestinationsInput, saved_destinationsUncheckedUpdateWithoutDestinationsInput>
  }

  export type saved_destinationsUpdateManyWithWhereWithoutDestinationsInput = {
    where: saved_destinationsScalarWhereInput
    data: XOR<saved_destinationsUpdateManyMutationInput, saved_destinationsUncheckedUpdateManyWithoutDestinationsInput>
  }

  export type saved_destinationsScalarWhereInput = {
    AND?: saved_destinationsScalarWhereInput | saved_destinationsScalarWhereInput[]
    OR?: saved_destinationsScalarWhereInput[]
    NOT?: saved_destinationsScalarWhereInput | saved_destinationsScalarWhereInput[]
    id?: IntFilter<"saved_destinations"> | number
    user_id?: IntNullableFilter<"saved_destinations"> | number | null
    destination_id?: IntNullableFilter<"saved_destinations"> | number | null
  }

  export type usersCreateWithoutItinerariesInput = {
    name?: string | null
    email: string
    password_hash: string
    destinations?: destinationsCreateNestedManyWithoutUsersInput
    saved_destinations?: saved_destinationsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutItinerariesInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    destinations?: destinationsUncheckedCreateNestedManyWithoutUsersInput
    saved_destinations?: saved_destinationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutItinerariesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutItinerariesInput, usersUncheckedCreateWithoutItinerariesInput>
  }

  export type itinerary_destinationsCreateWithoutItinerariesInput = {
    destinations?: destinationsCreateNestedOneWithoutItinerary_destinationsInput
  }

  export type itinerary_destinationsUncheckedCreateWithoutItinerariesInput = {
    id?: number
    destination_id?: number | null
  }

  export type itinerary_destinationsCreateOrConnectWithoutItinerariesInput = {
    where: itinerary_destinationsWhereUniqueInput
    create: XOR<itinerary_destinationsCreateWithoutItinerariesInput, itinerary_destinationsUncheckedCreateWithoutItinerariesInput>
  }

  export type itinerary_destinationsCreateManyItinerariesInputEnvelope = {
    data: itinerary_destinationsCreateManyItinerariesInput | itinerary_destinationsCreateManyItinerariesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutItinerariesInput = {
    update: XOR<usersUpdateWithoutItinerariesInput, usersUncheckedUpdateWithoutItinerariesInput>
    create: XOR<usersCreateWithoutItinerariesInput, usersUncheckedCreateWithoutItinerariesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutItinerariesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutItinerariesInput, usersUncheckedUpdateWithoutItinerariesInput>
  }

  export type usersUpdateWithoutItinerariesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    destinations?: destinationsUpdateManyWithoutUsersNestedInput
    saved_destinations?: saved_destinationsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutItinerariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    destinations?: destinationsUncheckedUpdateManyWithoutUsersNestedInput
    saved_destinations?: saved_destinationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type itinerary_destinationsUpsertWithWhereUniqueWithoutItinerariesInput = {
    where: itinerary_destinationsWhereUniqueInput
    update: XOR<itinerary_destinationsUpdateWithoutItinerariesInput, itinerary_destinationsUncheckedUpdateWithoutItinerariesInput>
    create: XOR<itinerary_destinationsCreateWithoutItinerariesInput, itinerary_destinationsUncheckedCreateWithoutItinerariesInput>
  }

  export type itinerary_destinationsUpdateWithWhereUniqueWithoutItinerariesInput = {
    where: itinerary_destinationsWhereUniqueInput
    data: XOR<itinerary_destinationsUpdateWithoutItinerariesInput, itinerary_destinationsUncheckedUpdateWithoutItinerariesInput>
  }

  export type itinerary_destinationsUpdateManyWithWhereWithoutItinerariesInput = {
    where: itinerary_destinationsScalarWhereInput
    data: XOR<itinerary_destinationsUpdateManyMutationInput, itinerary_destinationsUncheckedUpdateManyWithoutItinerariesInput>
  }

  export type destinationsCreateWithoutItinerary_destinationsInput = {
    title: string
    description?: string | null
    location?: string | null
    image?: string | null
    category?: string | null
    users?: usersCreateNestedOneWithoutDestinationsInput
    saved_destinations?: saved_destinationsCreateNestedManyWithoutDestinationsInput
  }

  export type destinationsUncheckedCreateWithoutItinerary_destinationsInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    image?: string | null
    category?: string | null
    created_by_id?: number | null
    saved_destinations?: saved_destinationsUncheckedCreateNestedManyWithoutDestinationsInput
  }

  export type destinationsCreateOrConnectWithoutItinerary_destinationsInput = {
    where: destinationsWhereUniqueInput
    create: XOR<destinationsCreateWithoutItinerary_destinationsInput, destinationsUncheckedCreateWithoutItinerary_destinationsInput>
  }

  export type itinerariesCreateWithoutItinerary_destinationsInput = {
    title?: string | null
    users?: usersCreateNestedOneWithoutItinerariesInput
  }

  export type itinerariesUncheckedCreateWithoutItinerary_destinationsInput = {
    id?: number
    title?: string | null
    user_id?: number | null
  }

  export type itinerariesCreateOrConnectWithoutItinerary_destinationsInput = {
    where: itinerariesWhereUniqueInput
    create: XOR<itinerariesCreateWithoutItinerary_destinationsInput, itinerariesUncheckedCreateWithoutItinerary_destinationsInput>
  }

  export type destinationsUpsertWithoutItinerary_destinationsInput = {
    update: XOR<destinationsUpdateWithoutItinerary_destinationsInput, destinationsUncheckedUpdateWithoutItinerary_destinationsInput>
    create: XOR<destinationsCreateWithoutItinerary_destinationsInput, destinationsUncheckedCreateWithoutItinerary_destinationsInput>
    where?: destinationsWhereInput
  }

  export type destinationsUpdateToOneWithWhereWithoutItinerary_destinationsInput = {
    where?: destinationsWhereInput
    data: XOR<destinationsUpdateWithoutItinerary_destinationsInput, destinationsUncheckedUpdateWithoutItinerary_destinationsInput>
  }

  export type destinationsUpdateWithoutItinerary_destinationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutDestinationsNestedInput
    saved_destinations?: saved_destinationsUpdateManyWithoutDestinationsNestedInput
  }

  export type destinationsUncheckedUpdateWithoutItinerary_destinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    saved_destinations?: saved_destinationsUncheckedUpdateManyWithoutDestinationsNestedInput
  }

  export type itinerariesUpsertWithoutItinerary_destinationsInput = {
    update: XOR<itinerariesUpdateWithoutItinerary_destinationsInput, itinerariesUncheckedUpdateWithoutItinerary_destinationsInput>
    create: XOR<itinerariesCreateWithoutItinerary_destinationsInput, itinerariesUncheckedCreateWithoutItinerary_destinationsInput>
    where?: itinerariesWhereInput
  }

  export type itinerariesUpdateToOneWithWhereWithoutItinerary_destinationsInput = {
    where?: itinerariesWhereInput
    data: XOR<itinerariesUpdateWithoutItinerary_destinationsInput, itinerariesUncheckedUpdateWithoutItinerary_destinationsInput>
  }

  export type itinerariesUpdateWithoutItinerary_destinationsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutItinerariesNestedInput
  }

  export type itinerariesUncheckedUpdateWithoutItinerary_destinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type destinationsCreateWithoutSaved_destinationsInput = {
    title: string
    description?: string | null
    location?: string | null
    image?: string | null
    category?: string | null
    users?: usersCreateNestedOneWithoutDestinationsInput
    itinerary_destinations?: itinerary_destinationsCreateNestedManyWithoutDestinationsInput
  }

  export type destinationsUncheckedCreateWithoutSaved_destinationsInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    image?: string | null
    category?: string | null
    created_by_id?: number | null
    itinerary_destinations?: itinerary_destinationsUncheckedCreateNestedManyWithoutDestinationsInput
  }

  export type destinationsCreateOrConnectWithoutSaved_destinationsInput = {
    where: destinationsWhereUniqueInput
    create: XOR<destinationsCreateWithoutSaved_destinationsInput, destinationsUncheckedCreateWithoutSaved_destinationsInput>
  }

  export type usersCreateWithoutSaved_destinationsInput = {
    name?: string | null
    email: string
    password_hash: string
    destinations?: destinationsCreateNestedManyWithoutUsersInput
    itineraries?: itinerariesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSaved_destinationsInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    destinations?: destinationsUncheckedCreateNestedManyWithoutUsersInput
    itineraries?: itinerariesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSaved_destinationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSaved_destinationsInput, usersUncheckedCreateWithoutSaved_destinationsInput>
  }

  export type destinationsUpsertWithoutSaved_destinationsInput = {
    update: XOR<destinationsUpdateWithoutSaved_destinationsInput, destinationsUncheckedUpdateWithoutSaved_destinationsInput>
    create: XOR<destinationsCreateWithoutSaved_destinationsInput, destinationsUncheckedCreateWithoutSaved_destinationsInput>
    where?: destinationsWhereInput
  }

  export type destinationsUpdateToOneWithWhereWithoutSaved_destinationsInput = {
    where?: destinationsWhereInput
    data: XOR<destinationsUpdateWithoutSaved_destinationsInput, destinationsUncheckedUpdateWithoutSaved_destinationsInput>
  }

  export type destinationsUpdateWithoutSaved_destinationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutDestinationsNestedInput
    itinerary_destinations?: itinerary_destinationsUpdateManyWithoutDestinationsNestedInput
  }

  export type destinationsUncheckedUpdateWithoutSaved_destinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    itinerary_destinations?: itinerary_destinationsUncheckedUpdateManyWithoutDestinationsNestedInput
  }

  export type usersUpsertWithoutSaved_destinationsInput = {
    update: XOR<usersUpdateWithoutSaved_destinationsInput, usersUncheckedUpdateWithoutSaved_destinationsInput>
    create: XOR<usersCreateWithoutSaved_destinationsInput, usersUncheckedCreateWithoutSaved_destinationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSaved_destinationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSaved_destinationsInput, usersUncheckedUpdateWithoutSaved_destinationsInput>
  }

  export type usersUpdateWithoutSaved_destinationsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    destinations?: destinationsUpdateManyWithoutUsersNestedInput
    itineraries?: itinerariesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSaved_destinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    destinations?: destinationsUncheckedUpdateManyWithoutUsersNestedInput
    itineraries?: itinerariesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type destinationsCreateWithoutUsersInput = {
    title: string
    description?: string | null
    location?: string | null
    image?: string | null
    category?: string | null
    itinerary_destinations?: itinerary_destinationsCreateNestedManyWithoutDestinationsInput
    saved_destinations?: saved_destinationsCreateNestedManyWithoutDestinationsInput
  }

  export type destinationsUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    image?: string | null
    category?: string | null
    itinerary_destinations?: itinerary_destinationsUncheckedCreateNestedManyWithoutDestinationsInput
    saved_destinations?: saved_destinationsUncheckedCreateNestedManyWithoutDestinationsInput
  }

  export type destinationsCreateOrConnectWithoutUsersInput = {
    where: destinationsWhereUniqueInput
    create: XOR<destinationsCreateWithoutUsersInput, destinationsUncheckedCreateWithoutUsersInput>
  }

  export type destinationsCreateManyUsersInputEnvelope = {
    data: destinationsCreateManyUsersInput | destinationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type itinerariesCreateWithoutUsersInput = {
    title?: string | null
    itinerary_destinations?: itinerary_destinationsCreateNestedManyWithoutItinerariesInput
  }

  export type itinerariesUncheckedCreateWithoutUsersInput = {
    id?: number
    title?: string | null
    itinerary_destinations?: itinerary_destinationsUncheckedCreateNestedManyWithoutItinerariesInput
  }

  export type itinerariesCreateOrConnectWithoutUsersInput = {
    where: itinerariesWhereUniqueInput
    create: XOR<itinerariesCreateWithoutUsersInput, itinerariesUncheckedCreateWithoutUsersInput>
  }

  export type itinerariesCreateManyUsersInputEnvelope = {
    data: itinerariesCreateManyUsersInput | itinerariesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type saved_destinationsCreateWithoutUsersInput = {
    destinations?: destinationsCreateNestedOneWithoutSaved_destinationsInput
  }

  export type saved_destinationsUncheckedCreateWithoutUsersInput = {
    id?: number
    destination_id?: number | null
  }

  export type saved_destinationsCreateOrConnectWithoutUsersInput = {
    where: saved_destinationsWhereUniqueInput
    create: XOR<saved_destinationsCreateWithoutUsersInput, saved_destinationsUncheckedCreateWithoutUsersInput>
  }

  export type saved_destinationsCreateManyUsersInputEnvelope = {
    data: saved_destinationsCreateManyUsersInput | saved_destinationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type destinationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: destinationsWhereUniqueInput
    update: XOR<destinationsUpdateWithoutUsersInput, destinationsUncheckedUpdateWithoutUsersInput>
    create: XOR<destinationsCreateWithoutUsersInput, destinationsUncheckedCreateWithoutUsersInput>
  }

  export type destinationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: destinationsWhereUniqueInput
    data: XOR<destinationsUpdateWithoutUsersInput, destinationsUncheckedUpdateWithoutUsersInput>
  }

  export type destinationsUpdateManyWithWhereWithoutUsersInput = {
    where: destinationsScalarWhereInput
    data: XOR<destinationsUpdateManyMutationInput, destinationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type destinationsScalarWhereInput = {
    AND?: destinationsScalarWhereInput | destinationsScalarWhereInput[]
    OR?: destinationsScalarWhereInput[]
    NOT?: destinationsScalarWhereInput | destinationsScalarWhereInput[]
    id?: IntFilter<"destinations"> | number
    title?: StringFilter<"destinations"> | string
    description?: StringNullableFilter<"destinations"> | string | null
    location?: StringNullableFilter<"destinations"> | string | null
    image?: StringNullableFilter<"destinations"> | string | null
    category?: StringNullableFilter<"destinations"> | string | null
    created_by_id?: IntNullableFilter<"destinations"> | number | null
  }

  export type itinerariesUpsertWithWhereUniqueWithoutUsersInput = {
    where: itinerariesWhereUniqueInput
    update: XOR<itinerariesUpdateWithoutUsersInput, itinerariesUncheckedUpdateWithoutUsersInput>
    create: XOR<itinerariesCreateWithoutUsersInput, itinerariesUncheckedCreateWithoutUsersInput>
  }

  export type itinerariesUpdateWithWhereUniqueWithoutUsersInput = {
    where: itinerariesWhereUniqueInput
    data: XOR<itinerariesUpdateWithoutUsersInput, itinerariesUncheckedUpdateWithoutUsersInput>
  }

  export type itinerariesUpdateManyWithWhereWithoutUsersInput = {
    where: itinerariesScalarWhereInput
    data: XOR<itinerariesUpdateManyMutationInput, itinerariesUncheckedUpdateManyWithoutUsersInput>
  }

  export type itinerariesScalarWhereInput = {
    AND?: itinerariesScalarWhereInput | itinerariesScalarWhereInput[]
    OR?: itinerariesScalarWhereInput[]
    NOT?: itinerariesScalarWhereInput | itinerariesScalarWhereInput[]
    id?: IntFilter<"itineraries"> | number
    title?: StringNullableFilter<"itineraries"> | string | null
    user_id?: IntNullableFilter<"itineraries"> | number | null
  }

  export type saved_destinationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: saved_destinationsWhereUniqueInput
    update: XOR<saved_destinationsUpdateWithoutUsersInput, saved_destinationsUncheckedUpdateWithoutUsersInput>
    create: XOR<saved_destinationsCreateWithoutUsersInput, saved_destinationsUncheckedCreateWithoutUsersInput>
  }

  export type saved_destinationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: saved_destinationsWhereUniqueInput
    data: XOR<saved_destinationsUpdateWithoutUsersInput, saved_destinationsUncheckedUpdateWithoutUsersInput>
  }

  export type saved_destinationsUpdateManyWithWhereWithoutUsersInput = {
    where: saved_destinationsScalarWhereInput
    data: XOR<saved_destinationsUpdateManyMutationInput, saved_destinationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type itinerary_destinationsCreateManyDestinationsInput = {
    id?: number
    itinerary_id?: number | null
  }

  export type saved_destinationsCreateManyDestinationsInput = {
    id?: number
    user_id?: number | null
  }

  export type itinerary_destinationsUpdateWithoutDestinationsInput = {
    itineraries?: itinerariesUpdateOneWithoutItinerary_destinationsNestedInput
  }

  export type itinerary_destinationsUncheckedUpdateWithoutDestinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    itinerary_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itinerary_destinationsUncheckedUpdateManyWithoutDestinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    itinerary_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type saved_destinationsUpdateWithoutDestinationsInput = {
    users?: usersUpdateOneWithoutSaved_destinationsNestedInput
  }

  export type saved_destinationsUncheckedUpdateWithoutDestinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type saved_destinationsUncheckedUpdateManyWithoutDestinationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itinerary_destinationsCreateManyItinerariesInput = {
    id?: number
    destination_id?: number | null
  }

  export type itinerary_destinationsUpdateWithoutItinerariesInput = {
    destinations?: destinationsUpdateOneWithoutItinerary_destinationsNestedInput
  }

  export type itinerary_destinationsUncheckedUpdateWithoutItinerariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    destination_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itinerary_destinationsUncheckedUpdateManyWithoutItinerariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    destination_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type destinationsCreateManyUsersInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    image?: string | null
    category?: string | null
  }

  export type itinerariesCreateManyUsersInput = {
    id?: number
    title?: string | null
  }

  export type saved_destinationsCreateManyUsersInput = {
    id?: number
    destination_id?: number | null
  }

  export type destinationsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary_destinations?: itinerary_destinationsUpdateManyWithoutDestinationsNestedInput
    saved_destinations?: saved_destinationsUpdateManyWithoutDestinationsNestedInput
  }

  export type destinationsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary_destinations?: itinerary_destinationsUncheckedUpdateManyWithoutDestinationsNestedInput
    saved_destinations?: saved_destinationsUncheckedUpdateManyWithoutDestinationsNestedInput
  }

  export type destinationsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itinerariesUpdateWithoutUsersInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary_destinations?: itinerary_destinationsUpdateManyWithoutItinerariesNestedInput
  }

  export type itinerariesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary_destinations?: itinerary_destinationsUncheckedUpdateManyWithoutItinerariesNestedInput
  }

  export type itinerariesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saved_destinationsUpdateWithoutUsersInput = {
    destinations?: destinationsUpdateOneWithoutSaved_destinationsNestedInput
  }

  export type saved_destinationsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    destination_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type saved_destinationsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    destination_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}