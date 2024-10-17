import { throttle } from "./lib/utils/optimizations/throttle";
import {
  IStandartValidateValue,
  SPECIAL_VALIDATE,
  prototypeEnumValidate,
  StandartValidate,
  validateMaxLength,
} from "./lib/utils/validate";

import type {
  ConditionState,
  ConditionSessionRequestType,
  RawStatusType,
  CommonFieldResponseType,
} from "./lib/utils/grpc";

export { isObject, isArray } from "./lib/utils/checking-type";
export {
  PasswordInput,
  PasswordInputWithMotion,
} from "./ui/input/password-input";

import {
  GRPC_STATUS_ENUM,
  oneOf,
  setterGrpcValue,
  convertKeyToMethodGrpc,
  enumHelpers,
  streamConditionEnum,
  stateSessionEnum,
  CommonResponseFieldHandler,
  CriticalResponseHandler,
} from "./lib/utils/grpc";

import { SessionStorage } from "./lib/utils/session-storage";
import { AnimationFrame } from "./lib/utils/animate";
import { eventTimeoutBus } from "./lib/utils/eventBus/event-timeout-bus";
import { EventBus } from "./lib/utils/eventBus/eventBus";
import { QueueWithTimeout } from "./lib/utils/data-structure/queue/queue-with-timeout";

import { SlangEnum, SlugEnum, PartOfSpeachEnum } from "./model/word.model";

import type { WordType } from "./model/word.model";

import type {
  AuthType,
  LoginUserParamsType,
  ResponseLoginUserType,
  ResponseRefreshTokenType,
  IUpdateWordGraphQlVariables,
  IDeleteRepetiotionGraphQlVariables,
  ICreateRepetitionGraphQlVariables,
  IDeleteWordGraphQlVariables,
  ICommonParams,
  IGetSpacedRepetitionGraphQLVariables,
  IGetWordsGraphQlVariables,
  ThemeColor,
  ISharedPreferenceResponse,
  IChangeSharedPreferenceParams,
  IUpdateUserParams,
  ICreateUserParams,
  ResponseUserType,
  IResponseCreateUser,
} from "./model";
export { isEqual } from "./lib/utils/comperator";
export { makeHeader } from "./lib/utils/header";

import { TIME_IN_MS } from "./config/time";
import { RESPONSE_STATUS } from "./config/status";
import { TIMEOUT_EVENT } from "./config/events";
import { usePrevious } from "./lib/hooks/use-previous";
import { ButtonWithLoader } from "./ui/button/button-with-loading";

import { UserType } from "./model/model";
import { IDecodeJWT } from "./lib/utils/jwt";
import { parseJwt } from "./lib/utils/jwt";
import { cls } from "./lib/utils/cls";
import { AddButton, ConditionType } from "./ui/button/add-button";
import {
  BaseInput,
  type IBaseInput,
  BaseInputWithMotion,
} from "./ui/input/base-input";
import { Progress } from "./ui/progress";
import { SelectWithPlaceholder } from "./ui/input/select-with-placeholder";
import {
  useStepper,
  StepType,
  UseStepperPropsType,
} from "./lib/hooks/use-stepper";

import {
  PORTAL_ID,
  LOCALSTORAGE_USER_PK,
  LOCALSTORAGE_SHARED_PREFERENCE_PK,
  LOCALSTORAGE_TOKEN_PK,
  TIME_DISPLAY_TOAST,
  TIME_EXPIRED_TOKEN,
} from "./config/global";

/* CONSTANT */
export {
  TIME_IN_MS,
  RESPONSE_STATUS,
  PORTAL_ID,
  LOCALSTORAGE_USER_PK,
  LOCALSTORAGE_SHARED_PREFERENCE_PK,
  LOCALSTORAGE_TOKEN_PK,
  TIME_DISPLAY_TOAST,
  TIME_EXPIRED_TOKEN,
  TIMEOUT_EVENT,
};
/*COMPONENTS */
export { FormPaper } from "./ui/form/form-paper";
import DefaultForm from "./ui/form/defaultForm";
export { MotionWrapper } from "./ui/motion-wrapper";
export {
  Progress,
  AddButton,
  BaseInput,
  BaseInputWithMotion,
  ButtonWithLoader,
  SelectWithPlaceholder,
  DefaultForm,
};
export { BaseButton } from "./ui/button/base-button";
/* HOOKS */
export { useStepper, usePrevious };
/* FUNCTION */
export { animationDirection } from "./lib/utils/animate";
export {
  throttle,
  GRPC_STATUS_ENUM,
  oneOf,
  setterGrpcValue,
  convertKeyToMethodGrpc,
  enumHelpers,
  streamConditionEnum,
  stateSessionEnum,
  CommonResponseFieldHandler,
  CriticalResponseHandler,
  QueueWithTimeout,
  eventTimeoutBus,
  EventBus,
  AnimationFrame,
  SessionStorage,
  StandartValidate,
  parseJwt,
  cls,
  prototypeEnumValidate,
  validateMaxLength,
};

// TYPES
export type { FormPaperPropsType } from "./ui/form/form-paper";
export type { MotionWrapperPropsType } from "./ui/motion-wrapper";
export type {
  MeasureAnimateDirectionType,
  DirectionAnimateType,
  Milliseconds,
} from "./lib/utils/animate";

export { SlangEnum, SlugEnum, PartOfSpeachEnum };
export type {
  IBaseInput,
  ConditionState,
  ConditionSessionRequestType,
  RawStatusType,
  CommonFieldResponseType,
  WordType,
  IStandartValidateValue,
  SPECIAL_VALIDATE,
  UserType,
  IDecodeJWT,
  ConditionType,
  StepType,
  UseStepperPropsType,
  AuthType,
  LoginUserParamsType,
  ResponseLoginUserType,
  ResponseRefreshTokenType,
  IUpdateWordGraphQlVariables,
  IDeleteRepetiotionGraphQlVariables,
  ICreateRepetitionGraphQlVariables,
  IDeleteWordGraphQlVariables,
  ICommonParams,
  IGetSpacedRepetitionGraphQLVariables,
  IGetWordsGraphQlVariables,
  ThemeColor,
  ISharedPreferenceResponse,
  IChangeSharedPreferenceParams,
  IUpdateUserParams,
  ICreateUserParams,
  ResponseUserType,
  IResponseCreateUser,
};

// ANIMATION CONFIG
export {
  springConfig,
  inertiaConfig,
} from "./config/animation/transition-config";
