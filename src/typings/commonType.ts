// 공통으로 사용되는 Type 있다면 여기에 정의
import { SerializedStyles } from '@emotion/react';

export interface CssType extends Record<string, string | SerializedStyles> {}
