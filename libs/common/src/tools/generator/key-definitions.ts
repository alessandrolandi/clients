import { GENERATOR_DISK, GENERATOR_MEMORY, KeyDefinition } from "../../platform/state";

import { GeneratedCredential } from "./history/generated-credential";
import { GeneratorNavigation } from "./navigation/generator-navigation";
import { PassphraseGenerationOptions } from "./passphrase/passphrase-generation-options";
import { PasswordGenerationOptions } from "./password/password-generation-options";
import { SecretClassifier } from "./state/secret-classifier";
import { SecretKeyDefinition } from "./state/secret-key-definition";
import { CatchallGenerationOptions } from "./username/catchall-generator-options";
import { EffUsernameGenerationOptions } from "./username/eff-username-generator-options";
import {
  ApiOptions,
  EmailDomainOptions,
  EmailPrefixOptions,
  SelfHostedApiOptions,
} from "./username/options/forwarder-options";
import { SubaddressGenerationOptions } from "./username/subaddress-generator-options";

/** plaintext password generation options */
export const GENERATOR_SETTINGS = new KeyDefinition<GeneratorNavigation>(
  GENERATOR_MEMORY,
  "generatorSettings",
  {
    deserializer: (value) => value,
  },
);

/** plaintext password generation options */
export const PASSWORD_SETTINGS = new KeyDefinition<PasswordGenerationOptions>(
  GENERATOR_DISK,
  "passwordGeneratorSettings",
  {
    deserializer: (value) => value,
  },
);

/** plaintext passphrase generation options */
export const PASSPHRASE_SETTINGS = new KeyDefinition<PassphraseGenerationOptions>(
  GENERATOR_DISK,
  "passphraseGeneratorSettings",
  {
    deserializer: (value) => value,
  },
);

/** plaintext username generation options */
export const EFF_USERNAME_SETTINGS = new KeyDefinition<EffUsernameGenerationOptions>(
  GENERATOR_DISK,
  "effUsernameGeneratorSettings",
  {
    deserializer: (value) => value,
  },
);

/** plaintext configuration for a domain catch-all address. */
export const CATCHALL_SETTINGS = new KeyDefinition<CatchallGenerationOptions>(
  GENERATOR_DISK,
  "catchallGeneratorSettings",
  {
    deserializer: (value) => value,
  },
);

/** plaintext configuration for an email subaddress. */
export const SUBADDRESS_SETTINGS = new KeyDefinition<SubaddressGenerationOptions>(
  GENERATOR_DISK,
  "subaddressGeneratorSettings",
  {
    deserializer: (value) => value,
  },
);

/** backing store configuration for {@link Forwarders.AddyIo} */
export const ADDY_IO_FORWARDER = new KeyDefinition<SelfHostedApiOptions & EmailDomainOptions>(
  GENERATOR_DISK,
  "addyIoForwarder",
  {
    deserializer: (value) => value,
  },
);

/** backing store configuration for {@link Forwarders.DuckDuckGo} */
export const DUCK_DUCK_GO_FORWARDER = new KeyDefinition<ApiOptions>(
  GENERATOR_DISK,
  "duckDuckGoForwarder",
  {
    deserializer: (value) => value,
  },
);

/** backing store configuration for {@link Forwarders.FastMail} */
export const FASTMAIL_FORWARDER = new KeyDefinition<ApiOptions & EmailPrefixOptions>(
  GENERATOR_DISK,
  "fastmailForwarder",
  {
    deserializer: (value) => value,
  },
);

/** backing store configuration for {@link Forwarders.FireFoxRelay} */
export const FIREFOX_RELAY_FORWARDER = new KeyDefinition<ApiOptions>(
  GENERATOR_DISK,
  "firefoxRelayForwarder",
  {
    deserializer: (value) => value,
  },
);

/** backing store configuration for {@link Forwarders.ForwardEmail} */
export const FORWARD_EMAIL_FORWARDER = new KeyDefinition<ApiOptions & EmailDomainOptions>(
  GENERATOR_DISK,
  "forwardEmailForwarder",
  {
    deserializer: (value) => value,
  },
);

/** backing store configuration for {@link forwarders.SimpleLogin} */
export const SIMPLE_LOGIN_FORWARDER = new KeyDefinition<SelfHostedApiOptions>(
  GENERATOR_DISK,
  "simpleLoginForwarder",
  {
    deserializer: (value) => value,
  },
);

/** encrypted password generation history */
export const GENERATOR_HISTORY = SecretKeyDefinition.array(
  GENERATOR_DISK,
  "localGeneratorHistory",
  SecretClassifier.allSecret<GeneratedCredential>(),
  {
    deserializer: GeneratedCredential.fromJSON,
  },
);
