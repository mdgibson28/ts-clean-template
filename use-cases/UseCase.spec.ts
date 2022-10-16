import {UseCase} from './UseCase';
import {BaseUseCase} from './BaseUseCase';

@UseCase<TestUseCase>(
    {
        dbConnector: {
            read: (id:string) => {
                return 'abc';
            }
        }
    }
)
class TestUseCase extends BaseUseCase {
    protected dependencies:{
        dbConnector: {
            read: (id:string) => string;
        }
    }

    public read(id:string):string {
        return this.dependencies.dbConnector.read(id);
    }
}

describe('UseCase', () => {

    it('builds a new frozen use case', () => {
        const useCase:TestUseCase = new TestUseCase();
        const result:string = useCase.read('123');

        expect(result).toEqual('abc');
    });
});
